import {createClient} from "@supabase/supabase-js";

// Ensure environment variables are loaded
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase URL or anonymous key.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);