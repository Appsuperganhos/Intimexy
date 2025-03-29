// js/supabase.js

// Importando e configurando o Supabase
const SUPABASE_URL = "https://hzgxfzrtznefajhtmill.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6Z3hmenJ0em5lZmFqaHRtaWxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyODAxNTYsImV4cCI6MjA1ODg1NjE1Nn0.VgeQQXtraVSotZhV5BUBxCZEUf_tX8d_0q5GBzP0pd4";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Exportando a instância para ser usada em outros arquivos
export { supabase };
