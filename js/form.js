const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Mensagem enviada com sucesso!");
});