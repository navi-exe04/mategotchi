/*Son todas las funciones correspondientes a los metodos POST*/

//Invocamos a la BD
const connection = require('../database/db');
//Invocamos a bcryptjs para las password de los usuarios
const bcryptjs = require('bcryptjs');
//Invocamos a moment (para funciones de tiempo y fecha en el sistema)
const moment = require('moment');
moment.locale('es');

//Metodo de autenticacion para el inicio de sesión
exports.auth = async (req, res) => {

    //Obtenemos los valores que el usuario haya ingresado
    const email = req.body.email;
    const pass = req.body.password;

    //Comprobamos que el usuario exista en la BD
    if (email && pass) {

        connection.query('SELECT * FROM users WHERE email = ?', [email], async (_error, results) => {

            //Si la consulta no regresa nada o la contraseña es incorrecta
            if (results.length == 0 || !(await bcryptjs.compare(pass, results[0].password))) {

                //Mandamos variables para la configuracion de la alerta de sweet alert
                res.render('login', {
                    alert: true,
                    alertTitle: "Error",
                    alertMessage: "Usuario y/o contraseña incorrectas",
                    alertIcon: 'error',
                    showConfirmButton: true,
                    timer: false,
                    ruta: 'login'
                });

            } else { //El usuario y contraseña son correctos

                //Creamos variables de sesion
                req.session.loggedin = true; //Esto nos permite saber si el usuario esta autenticado
                req.session.name = results[0].name; //Obtenemos el nombre del usuario que esta ingresando

                //Mandamos variables para la configuracion de la alerta de sweet alert
                res.render('login', {
                    alert: true,
                    alertTitle: "¡BIENVENIDO!",
                    alertMessage: `Hola, ${results[0].name}.`,
                    alertIcon: 'success',
                    showConfirmButton: false,
                    timer: 2000,
                    ruta: 'system',
                    rol: results[0].type
                });

            }

        });

    } else { //El usuario no ha ingresado usuario o contraseña

        //Mandamos variables para la configuracion de la alerta de sweet alert
        res.render('login', {
            alert: true,
            alertTitle: "¡UPS!",
            alertMessage: "Ingrese un usuario y contraseña.",
            alertIcon: 'warning',
            showConfirmButton: true,
            timer: false,
            ruta: 'login'
        });

    }

}

//Metodo para crear un nuevo usuario para el sistema
exports.registroUsuario = async (req, res) => {

    const name = req.body.nombre_usuario;
    const email = req.body.email_usuario;
    const pass = req.body.pass_usuario;

    //Comprueba que los datos del usuario no existan en la BD
    connection.query(`SELECT * FROM users WHERE email = '${email}'`, async (error, results) => {

        //No hay coincidencias
        if (results.length == 0) {

            let passHash = await bcryptjs.hashSync(pass, 10);

            connection.query('INSERT INTO users SET ?', {
                name: name,
                email: email,
                type: type,
                password: passHash
            }, async (_error, _results) => {

                res.redirect('/system')

            });

        }

    });

}
