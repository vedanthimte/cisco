import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cdlkwjyzokfjtkawroyu.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkbGt3anl6b2tmanRrYXdyb3l1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg0MzU4OTAsImV4cCI6MjA3NDAxMTg5MH0.DB3OcVzBYdSsp8X4Lws2y41ikG9qeLPpbJ-F-4TBwq0"; 
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
