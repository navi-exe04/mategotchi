const allHTML = document;
const botonMenu = document.getElementById('boton-menu');
const divMenu = document.getElementById('menu-nav');
const divLogin = document.getElementById('div_login');
const divRegister = document.getElementById('div_registro');

//Al iniciar la pagina
window.onload = () => {
    botonesInformacion();
}

//Eventos para el menu desplegable
botonMenu.addEventListener('click', (e) => {
    e.preventDefault();
    if (divLogin.classList.contains('active'))
        divLogin.classList.toggle('active');
    if (divRegister.classList.contains('active'))
        divRegister.classList.toggle('active')
    divMenu.classList.toggle('show');
    allHTML.body.classList.toggle('noScroll');
});

/******** FUNCIONES *********/

//Funcion encargada de los eventos de los botones de informacion
function botonesInformacion() {

    const botonLogin = document.getElementById("login-btn");
    const botonCerrarLogin = document.getElementById("btn-cerrarLogin");
    botonLogin.addEventListener('click', abreInfo(divLogin));
    botonCerrarLogin.addEventListener('click', abreInfo(divLogin));

    const botonRegister = document.getElementById("register-btn");
    const botonCerrarRegister = document.getElementById("btn-cerrarRegister");
    botonRegister.addEventListener('click', abreInfo(divRegister));
    botonCerrarRegister.addEventListener('click', abreInfo(divRegister));

}

//Funcion que se encarga de abrir un recuadro de informacion dependiendo la eleccion del usuario
function abreInfo(popup) {
    return function (e) {
        e.preventDefault();
        if (divMenu.classList.contains('show')) {
            divMenu.classList.remove('show');
            allHTML.body.classList.remove('noScroll');
        }
        if(popup == divLogin && divRegister.classList.contains('active'))
            divRegister.classList.toggle('active');
        if(popup == divRegister && divLogin.classList.contains('active'))
            divLogin.classList.toggle('active');
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