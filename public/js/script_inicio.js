const allHTML = document;
const botonMenu = document.getElementById('boton-menu');
const divMenu = document.getElementById('menu-nav');
const divJuegos = document.getElementById('div_juegos');
const divClases = document.getElementById('div_clases');
const divEjercicios = document.getElementById('div_ejercicios');

//Al iniciar la pagina
window.onload = () => {
    botonesInformacion();
}

//Eventos para el menu desplegable
botonMenu.addEventListener('click', (e) => {
    e.preventDefault();
    if (divJuegos.classList.contains('active'))
        divJuegos.classList.toggle('active');
    divMenu.classList.toggle('show');
    allHTML.body.classList.toggle('noScroll');
});

/******** FUNCIONES *********/

//Funcion encargada de los eventos de los botones de informacion
function botonesInformacion() {

    const botonJuegos = document.getElementById("boton-juegos");
    const botonCerrarJuegos = document.getElementById("btn-cerrarJuegos");
    botonJuegos.addEventListener('click', abreInfo(divJuegos));
    botonCerrarJuegos.addEventListener('click', abreInfo(divJuegos));

    const botonClases = document.getElementById("boton-clases");
    const botonCerrarClases = document.getElementById("btn-cerrarClases");
    botonClases.addEventListener('click', abreInfo(divClases));
    botonCerrarClases.addEventListener('click', abreInfo(divClases));

    const botonEjercicios = document.getElementById("boton-ejercicios");
    const botonCerrarEjercicios = document.getElementById("btn-cerrarEjercicios");
    botonEjercicios.addEventListener('click', abreInfo(divEjercicios));
    botonCerrarEjercicios.addEventListener('click', abreInfo(divEjercicios));

}

//Funcion que se encarga de abrir un recuadro de informacion dependiendo la eleccion del usuario
function abreInfo(popup) {
    return function (e) {
        e.preventDefault();
        if (divMenu.classList.contains('show')) {
            divMenu.classList.remove('show');
            allHTML.body.classList.remove('noScroll');
        }
        if(popup == divClases && divJuegos.classList.contains('active')) {
            divJuegos.classList.toggle('active');
        } else if (popup == divClases && divEjercicios.classList.contains('active')) {
            divEjercicios.classList.toggle('active');
        }
        if(popup == divEjercicios && divJuegos.classList.contains('active')) {
            divJuegos.classList.toggle('active');
        } else if (popup == divEjercicios && divClases.classList.contains('active')) {
            divClases.classList.toggle('active');
        }
        if(popup == divJuegos && divClases.classList.contains('active')) {
            divClases.classList.toggle('active');
        } else if (popup == divJuegos && divEjercicios.classList.contains('active')) {
            divEjercicios.classList.toggle('active');
        }
        popup.classList.toggle('active');
        allHTML.body.classList.toggle('noScroll');
    };
}

//Funcion que se encarga de poner el fondo con filtro blur
function blurMain() {
    const blurBody = document.querySelector('main');
    const blurHeader = document.querySelector('header');
    const blurFooter = document.querySelector('footer');
    blurBody.classList.toggle('active');
    blurHeader.classList.toggle('active');
    blurFooter.classList.toggle('active');
}