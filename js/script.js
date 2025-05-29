function mostrarAlerta() {
    alert("Obrigado por entrar em contato! Em breve retornaremos.");
}
window.addEventListener("DOMContentLoaded", () => {
    // Esse código aqui dentro vai rodar quando a página terminar de carregar
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const logado = localStorage.getItem("logado");
  
    if (logado === "true" && usuario) {
      const header = document.querySelector("header");
      const saudacao = document.createElement("p");
      saudacao.textContent = `Olá, ${usuario.nome}!`;
      header.appendChild(saudacao);
    }
  });
  function logout() {
    localStorage.removeItem("logado"); // Salvando o objeto no localStorage
    alert("Você saiu da conta.");
    window.location.reload(); // recarrega a página
  }

