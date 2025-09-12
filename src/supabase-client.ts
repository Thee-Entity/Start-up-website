import {createClient} from "@supabase/supabase-js";

// Ensure environment variables are loaded
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === 'YOUR_SUPABASE_URL') {
  console.error('Supabase URL or anonymous key is missing or not configured. Please check your .env file.');
  // Return a mock client to prevent the app from crashing during build or in environments where env vars are not set.
  // This allows the UI to render and show a more graceful error message.
  const mockSupabase = {
    from: () => ({
      select: async () => ({ error: { message: 'Supabase not configured' }, data: null }),
      insert: async () => ({ error: { message: 'Supabase not configured' }, data: null }),
      update: async () => ({ error: { message: 'Supabase not configured' }, data: null }),
      delete: async () => ({ error: { message: 'Supabase not configured' }, data: null }),
    }),
  };
  // @ts-ignore
  exports.supabase = mockSupabase;
} else {
  exports.supabase = createClient(supabaseUrl, supabaseAnonKey);
}
