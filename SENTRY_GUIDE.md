# Sentry Setup Guide (Vite + React + TS)

Quick, on-point setup for error reporting and user feedback loops in **TSMCMedical**.

---

## 1. Install Dependencies

Install the Sentry React SDK:
```bash
npm install @sentry/react
```

---

## 2. Initialize Sentry

Add initialization code to your entry point file, **`src/main.tsx`** (or `src/index.tsx`):

```typescript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN || "YOUR_SENTRY_DSN_HERE",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of transactions for development
  // Session Replay
  replaysSessionSampleRate: 0.1, // Sample rate for all sessions
  replaysOnErrorSampleRate: 1.0, // Capture 100% of sessions with errors
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## 3. Environment Configuration

Add the DSN to your environment file (e.g., **`.env.local`**):
```env
VITE_SENTRY_DSN=https://your-public-key@o0.ingest.sentry.io/your-project-id
```

---

## 4. Error Boundary & User Feedback

Wrap your main component tree or specific routes with Sentry's Error Boundary to capture errors and show a feedback dialog:

```typescript
import * as Sentry from "@sentry/react";

function FallbackComponent({ error, resetError }: Sentry.FallbackRender) {
  return (
    <div role="alert" style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Something went wrong.</h2>
      <button onClick={() => Sentry.showReportDialog()}>Submit Feedback</button>
      <button onClick={resetError}>Try Again</button>
    </div>
  );
}

export default function SafeApp() {
  return (
    <Sentry.ErrorBoundary fallback={FallbackComponent} showDialog>
      <App />
    </Sentry.ErrorBoundary>
  );
}
```
