import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://hzgxfzrtznefajhtmill.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6Z3hmenJ0em5lZmFqaHRtaWxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyODAxNTYsImV4cCI6MjA1ODg1NjE1Nn0.VgeQQXtraVSotZhV5BUBxCZEUf_tX8d_0q5GBzP0pd4'; // Substitua pela sua chave anon
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Função para cadastrar usuário
export async function signUp(name, email, password) {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name }
    }
  });

  if (error) {
    console.error('Erro no cadastro:', error.message);
    return { success: false, message: error.message };
  }

  console.log('Usuário cadastrado:', user);
  return { success: true, user };
}

// Função para login
export async function signIn(email, password) {
  const { user, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    console.error('Erro no login:', error.message);
    return { success: false, message: error.message };
  }

  console.log('Usuário logado:', user);
  return { success: true, user };
}

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
    // Após o sucesso do cadastro, redireciona para a página de login ou outra página.
    window.location.href = "login.html"; // Ou pode ser "index.html", ou "home.html"
  }
});

