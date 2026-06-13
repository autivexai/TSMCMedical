# Implementation Plan - Backend & Admin Dashboard

Add a full Supabase backend integration, authentication controls, and an admin dashboard to manage inquiries, leads, and responses.

## User Review Required

> [!IMPORTANT]
> - **Signup Restriction**: Public signup will be disabled in Supabase Auth. The initial admin will be created manually or via a secure script, after which admins can invite other admins.
> - **Email Redirection**: Clicking a lead's email will trigger a mailto link (`mailto:email@address.com?subject=TSMC...`) to open the local email client or webmail application.
> - **Toasts**: A new toast notification system will be added and configured to display at the **top-left** of the screen using `react-hot-toast`.

## Proposed Changes

---

### 1. Database Schema (Supabase)

We will update the database schemas to support authentication roles, and enhance `contact_submissions` to manage answers/CRUD.

#### `[NEW]` [schema.sql](file:///c:/Users/toshi/CODE%20HOTELS/TSMCMedical/supabase/migrations/20260613000000_init_dashboard.sql)
- **`contact_submissions` modifications / migration**:
  - Add `status` column: `text` (default `'pending'`, constraint: `'pending'`, `'in_progress'`, `'answered'`).
  - Add `answer_content` column: `text` (null by default).
  - Add `answered_at` column: `timestamptz`.
  - Add `answered_by` column: `uuid` referencing `auth.users`.
- **Row-Level Security (RLS)**:
  - Enable RLS on `contact_submissions`.
  - Allow anyone to `INSERT` submissions (for the public contact form).
  - Allow authenticated users with role `admin` to perform all operations (`SELECT`, `INSERT`, `UPDATE`, `DELETE`).

---

### 2. Branding & UI Design System

We will align all admin views with the existing design system specified in [index.css](file:///c:/Users/toshi/CODE%20HOTELS/TSMCMedical/src/index.css):
- **Typography**: Headings: `Outfit` font, body/form elements: `Inter`.
- **Colors**: Primary is `Brand Slate-Blue/Indigo` (using classes like `bg-brand-600` and hover `bg-brand-700`). Accent is `Teal` (`text-accent-600`).
- **Cards**: All data views will use `.ui-card` classes (`bg-white rounded-xl shadow-lg border border-gray-200 transition-all duration-300`).
- **Interactive States**: Hover effects, responsive layout grids, and premium loaders.

---

### 3. Application Pages & Routing

We will add the new admin routes within `src/App.tsx`.

#### `[MODIFY]` [App.tsx](file:///c:/Users/toshi/CODE%20HOTELS/TSMCMedical/src/App.tsx)
- Add new routes:
  - `/admin/login` - Admin Login screen.
  - `/admin/profile` - Manage profile/auth settings.
  - `/admin/inquiries` - List of all inquiries, filtering by `status` (All, Pending, Answered).
  - `/admin/inquiries/:id` - Dedicated slug page for viewing details of an inquiry, editing answers, updating status, and launching the email client.
  - `/admin/leads` - List of unique leads (aggregated contacts) with CRUD capabilities.

#### `[NEW]` [Login.tsx](file:///c:/Users/toshi/CODE%20HOTELS/TSMCMedical/src/pages/admin/Login.tsx)
- Premium dark/light glassmorphic login screen for TSMC Admin.

#### `[NEW]` [InquiryList.tsx](file:///c:/Users/toshi/CODE%20HOTELS/TSMCMedical/src/pages/admin/InquiryList.tsx)
- View list of submissions with filter tabs, search functionality, and delete actions.

#### `[NEW]` [InquiryDetail.tsx](file:///c:/Users/toshi/CODE%20HOTELS/TSMCMedical/src/pages/admin/InquiryDetail.tsx)
- Dedicated page to read inquiry detail, compose answers, mark as resolved/answered, and trigger `mailto:` links.

#### `[NEW]` [LeadsList.tsx](file:///c:/Users/toshi/CODE%20HOTELS/TSMCMedical/src/pages/admin/LeadsList.tsx)
- A unified lead directory dashboard.

#### `[NEW]` [Profile.tsx](file:///c:/Users/toshi/CODE%20HOTELS/TSMCMedical/src/pages/admin/Profile.tsx)
- Manage password changes, profile data, and invite buttons.

---

### 4. Toast Implementation

#### `[MODIFY]` [main.tsx](file:///c:/Users/toshi/CODE%20HOTELS/TSMCMedical/src/main.tsx)
- Wrap application with `Toaster` component from `react-hot-toast` configured with `position="top-left"`.

---

## Verification Plan

### Automated Tests
- Build and run Vite validation: `npm run build` to verify there are no compilation or bundling errors.

### Manual Verification
- Log in using test admin credentials.
- Verify that accessing `/admin/inquiries` without being authenticated redirects to `/admin/login`.
- Submit a mock contact form submission and verify it appears instantly on the inquiries list.
- Click "Send Email" on the inquiry detail page and check if it launches the correct email URL handler.
- Verify toast notifications appear at the top-left on success/error events.
