import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for the entire app
export const supabase = createClient(
  'https://urbyuqgfawjcydrjwgst.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyYnl1cWdmYXdqY3lkcmp3Z3N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5MDk5NzAsImV4cCI6MjAyNDQ4NTk3MH0.GG5UNt0OZN8kXh7f4GWBPYHOcHVoK9Y59UYbYVzHWXY',
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
    global: {
      // Optimize fetch settings
      fetch: (url, options) => {
        const headers = options?.headers || {};
        return fetch(url, {
          ...options,
          headers: {
            ...headers,
            'Cache-Control': 'no-cache',
          },
        });
      },
    },
    // Add request timeout
    db: {
      schema: 'public',
    },
    realtime: {
      // Disable realtime subscriptions if not needed
      enabled: false,
    },
  }
);

// Helper function to handle database errors
export const handleDatabaseError = (error: any) => {
  console.error('Database error:', error);
  
  // Return user-friendly error message
  if (error?.code === '23505') {
    return 'This record already exists.';
  } else if (error?.code === '23503') {
    return 'This operation cannot be completed due to related records.';
  } else if (error?.code?.startsWith('23')) {
    return 'There was a validation error with your data.';
  } else if (error?.code?.startsWith('42')) {
    return 'There was a problem with the database query.';
  }
  
  return 'An unexpected error occurred. Please try again later.';
};

// Optimized contact submission function
export const submitContactForm = async (formData: any) => {
  try {
    const { data, error } = await supabase.from('contact_submissions').insert([{
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      company_name: formData.companyName,
      phone_number: formData.phoneNumber,
      service: formData.service,
      additional_info: formData.additionalInfo || null,
      contact_method: formData.contactMethod,
      contact_time: formData.contactTime
    }]);
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    return { success: false, error: handleDatabaseError(error) };
  }
};