// Script para el menú responsive
function mostrarOcultarMenu() {
    var navUl = document.querySelector('nav ul');
    navUl.classList.toggle('active');
}

// Función para resaltar el enlace seleccionado en el menú
function seleccionar() {
    var navUl = document.querySelector('nav ul');
    navUl.classList.remove('active');
}

// Función para descargar el currículum
document.querySelector('.boton button').addEventListener('click', function () {
    window.location.href = "imgs/WeimannJoaquin.pdf";
});
