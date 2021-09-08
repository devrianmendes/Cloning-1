hamburguer = document.querySelector(".hamburguer");
body = document.querySelector(".body");


hamburguer.addEventListener('click', clicar);


function clicar() {
    body.classList.toggle('show-menu');
}