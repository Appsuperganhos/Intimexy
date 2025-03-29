document.getElementById("login-form")?.addEventListener("submit", function(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // Aqui você pode validar os dados ou fazer uma requisição para autenticação.
  console.log("Login com email:", email, "senha:", password);
});

document.getElementById("signup-form")?.addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // Aqui você pode salvar os dados ou fazer uma requisição para o cadastro.
  console.log("Cadastro com nome:", name, "email:", email, "senha:", password);
});
