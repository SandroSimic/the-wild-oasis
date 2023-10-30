import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tzjgygztknlzdsqvwnlo.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6amd5Z3p0a25semRzcXZ3bmxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgwMzMyNTMsImV4cCI6MjAxMzYwOTI1M30.mLBDuJsQB4fAUAcdHKRrNEdMX7bz6G-zdJAb9MytcO4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
