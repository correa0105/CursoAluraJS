const teclas = document.querySelectorAll(".tecla");

function adicionaEventoTecla() {
    teclas.forEach( element => {
        element.addEventListener("click", tocaSomClick);
    }
)}

function tocaSomClick(event) {
    const element = event.target;
    const instrumento = element.classList[1];

    document.querySelector(`#som_${instrumento}`).play();
}

adicionaEventoTecla();