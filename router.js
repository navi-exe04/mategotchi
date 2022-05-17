/*Se definen todas las rutas de nuestro proyecto*/

//Invocamos a express
const express = require('express');
const router = express.Router();

//Invocamos a moment
const moment = require('moment');
moment.locale('es');

//Invocamos al modulo de conexion de BD
const connection = require('./database/db');

/*Rutas y metodos para el usuario (paciente)*/
//Ruta para la pagina principal
router.get('/', (_req, res) => {
    res.render('index');
});

//Comprobamos que el usuario esta autenticado para acceder al sistema
router.get('/inicio', (req, res) => {

    //El usuario ha ingresado correctamente
    if (req.session.loggedin) {

        res.render('inicio', {
            nombre_usuario: req.session.name,
            apellido_paterno: req.session.apellido_paterno,
            apellido_materno: req.session.apellido_materno
        });

    } else { //El usuario no ha ingresado

        res.render('index', {
            alert: true,
            alertTitle: "¡Lo siento!",
            alertMessage: "Debe ingresar sesión.",
            alertIcon: 'warning',
            showConfirmButton: true,
            timer: false,
            ruta: ''
        });

       res.redirect('/');

    }

});

//Logout
router.get('/logout', (req, res) => {

    req.session.destroy(() => { //Se "destruye la sesion"
        res.render('index', {
            alert: true,
            alertTitle: "¡Hasta pronto!",
            alertMessage: `No olvides repasar las actividades.`,
            alertIcon: 'success',
            showConfirmButton: false,
            timer: 1500,
            ruta: '',
        });
    });

});

//Ruta para el juego 1
router.get('/juego1', (req, res) => {
    
    //El usuario ha ingresado correctamente
    if (req.session.loggedin) {

        res.render('juego1', {
            nombre_usuario: req.session.name,
        });

    } else { //El usuario no ha ingresado

        res.render('index', {
            alert: true,
            alertTitle: "¡Lo siento!",
            alertMessage: "Debe ingresar sesión.",
            alertIcon: 'warning',
            showConfirmButton: true,
            timer: false,
            ruta: ''
        });

    }

});

//Ruta para el juego 2
router.get('/juego2', (req, res) => {
    
    //El usuario ha ingresado correctamente
    if (req.session.loggedin) {

        res.render('juego2', {
            nombre_usuario: req.session.name,
        });

    } else { //El usuario no ha ingresado

        res.render('index', {
            alert: true,
            alertTitle: "¡Lo siento!",
            alertMessage: "Debe ingresar sesión.",
            alertIcon: 'warning',
            showConfirmButton: true,
            timer: false,
            ruta: ''
        });

    }

});

//Ruta para el juego 3
router.get('/juego3', (req, res) => {
    
    //El usuario ha ingresado correctamente
    if (req.session.loggedin) {

        res.render('juego3', {
            nombre_usuario: req.session.name,
        });

    } else { //El usuario no ha ingresado

        res.render('index', {
            alert: true,
            alertTitle: "¡Lo siento!",
            alertMessage: "Debe ingresar sesión.",
            alertIcon: 'warning',
            showConfirmButton: true,
            timer: false,
            ruta: ''
        });

    }

});

//Ruta para el juego 4
router.get('/juego4', (req, res) => {
    
    //El usuario ha ingresado correctamente
    if (req.session.loggedin) {

        res.render('juego4', {
            nombre_usuario: req.session.name,
        });

    } else { //El usuario no ha ingresado

        res.render('index', {
            alert: true,
            alertTitle: "¡Lo siento!",
            alertMessage: "Debe ingresar sesión.",
            alertIcon: 'warning',
            showConfirmButton: true,
            timer: false,
            ruta: ''
        });

    }

});

//Ruta para el juego 5
router.get('/juego5', (req, res) => {
    
    //El usuario ha ingresado correctamente
    if (req.session.loggedin) {

        res.render('juego5', {
            nombre_usuario: req.session.name,
        });

    } else { //El usuario no ha ingresado

        res.render('index', {
            alert: true,
            alertTitle: "¡Lo siento!",
            alertMessage: "Debe ingresar sesión.",
            alertIcon: 'warning',
            showConfirmButton: true,
            timer: false,
            ruta: ''
        });

    }

});

//Solicitamos las funciones del controlador
const controllers = require('./controllers/controllers');
const expressMysqlSession = require('express-mysql-session');
router.post('/auth', controllers.auth);
router.post('/registroUsuario', controllers.registroUsuario);

module.exports = router; //Exportamos las rutas