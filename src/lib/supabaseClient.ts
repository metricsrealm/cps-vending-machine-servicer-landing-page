import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://gyjbmjccpumzhuihwznh.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_pzpU9CeTfnyjnHrEe9dLow_Pd04FgQF";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
