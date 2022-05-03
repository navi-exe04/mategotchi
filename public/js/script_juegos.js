const allHTML = document;
const botonMenu = document.getElementById('boton-menu');
const divMenu = document.getElementById('menu-nav');
const divJuegos = document.getElementById('div_juegos');

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

    /* const botonJuegos = document.getElementById("boton-juegos");
    const botonCerrarJuegos = document.getElementById("btn-cerrarJuegos");
    botonJuegos.addEventListener('click', abreInfo(divJuegos));
    botonCerrarJuegos.addEventListener('click', abreInfo(divJuegos)); */

}

//Funcion que se encarga de abrir un recuadro de informacion dependiendo la eleccion del usuario
function abreInfo(popup) {
    return function (e) {
        e.preventDefault();
        if (divMenu.classList.contains('show')) {
            divMenu.classList.remove('show');
            allHTML.body.classList.remove('noScroll');
        }
        /* if(popup == divLogin && divRegister.classList.contains('active'))
            divRegister.classList.toggle('active');
        if(popup == divRegister && divLogin.classList.contains('active'))
            divLogin.classList.toggle('active'); */
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