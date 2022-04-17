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

        res.render('inicio');

    } else { //El usuario no ha ingresado

        res.render('index', {
            alert: true,
            alertTitle: "¡Lo siento!",
            alertMessage: "Debe ingresar sesión.",
            alertIcon: 'warning',
            showConfirmButton: true,
            timer: false,
            ruta: 'login'
        });

       res.render('/');

    }

});

//Logout
router.get('/logout', (req, res) => {

    req.session.destroy(() => { //Se "destruye la sesion"
        res.redirect('/login')
    });

});

//Solicitamos las funciones del controlador
const controllers = require('./controllers/controllers');
router.post('/auth', controllers.auth);
router.post('/registroUsuario', controllers.registroUsuario);

module.exports = router; //Exportamos las rutas