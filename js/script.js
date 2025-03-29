// Conectar ao Supabase
const SUPABASE_URL = "https://hzgxfzrtznefajhtmill.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6Z3hmenJ0em5lZmFqaHRtaWxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyODAxNTYsImV4cCI6MjA1ODg1NjE1Nn0.VgeQQXtraVSotZhV5BUBxCZEUf_tX8d_0q5GBzP0pd4";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Login
document.getElementById("login-form")?.addEventListener("submit", async function(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { user, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    alert("Erro no login: " + error.message);
  } else {
    alert("Login bem-sucedido!");
    window.location.href = "dashboard.html"; // Redirecionar para dashboard
  }
});

// Cadastro
document.getElementById("signup-form")?.addEventListener("submit", async function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { user, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    alert("Erro no cadastro: " + error.message);
  } else {
    alert("Cadastro realizado com sucesso! Verifique seu e-mail.");
  }
});
