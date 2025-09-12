import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase: SupabaseClient;

if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('YOUR_SUPABASE_URL')) {
  console.error('Supabase URL or anonymous key is missing or not configured. Please check your .env file.');
  
  // Create a mock client that will always return an error.
  // This allows the app to build and run, showing a graceful failure state.
  supabase = {
    from: () => ({
      select: async () => ({ error: { message: 'Supabase not configured' }, data: null }),
      insert: async () => ({ error: { message: 'Supabase not configured' }, data: null }),
      update: async () => ({ error: { message: 'Supabase not configured' }, data: null }),
      delete: async () => ({ error: { message: 'Supabase not configured' }, data: null }),
      // Add other methods you might use here, so they don't cause runtime errors
      auth: {} as any, 
      channel: {} as any,
      realtime: {} as any,
      rpc: async () => ({ error: { message: 'Supabase not configured' }, data: null }),
      storage: {} as any,
    }),
  } as unknown as SupabaseClient;

} else {
  // Create the real Supabase client
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase };
