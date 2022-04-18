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
    const email1_usuario = req.body.email1_usuario;
    const password1_usuario = req.body.password1_usuario;

    //Comprobamos que el usuario exista en la BD
    if (email1_usuario && password1_usuario) {

        connection.query('SELECT * FROM users WHERE email = ?', [email1_usuario], async (_error, results) => {

            //Si la consulta no regresa nada o la contraseña es incorrecta
            if (results.length == 0 || !(await bcryptjs.compare(password1_usuario, results[0].password))) {

                //Mandamos variables para la configuracion de la alerta de sweet alert
                res.render('index', {
                    alert: true,
                    alertTitle: "Error",
                    alertMessage: "Usuario y/o contraseña incorrectas",
                    alertIcon: 'error',
                    showConfirmButton: true,
                    timer: false,
                    ruta: ''
                });
                res.redirect('/');

            } else { //El usuario y contraseña son correctos

                //Creamos variables de sesion
                req.session.loggedin = true; //Esto nos permite saber si el usuario esta autenticado
                req.session.name = results[0].nombre; //Obtenemos el nombre del usuario que esta ingresando

                //Mandamos variables para la configuracion de la alerta de sweet alert
                res.render('inicio', {
                    nombre_usuario: req.session.name,
                    alert: true,
                    alertTitle: "¡Hola de nuevo!",
                    alertMessage: `Me da gusto saludarte, ${req.session.name}.`,
                    alertIcon: 'success',
                    showConfirmButton: false,
                    timer: 2000,
                    ruta: 'inicio',
                });

            }

        });

    } else { //El usuario no ha ingresado usuario o contraseña

        //Mandamos variables para la configuracion de la alerta de sweet alert
        res.render('index', {
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

    const nombre_usuario = req.body.nombre_usuario;
    const apPat_usuario = req.body.apPat_usuario;
    const apMat_usuario = req.body.apMat_usuario;
    const grado_usuario = req.body.grado_usuario;
    const email2_usuario = req.body.email2_usuario;
    const password2_usuario = req.body.password2_usuario;

    //Comprueba que los datos del usuario no existan en la BD
    connection.query(`SELECT * FROM users WHERE email = '${email2_usuario}'`, async (_error1, results1) => {

        //No hay coincidencias
        if (results1.length == 0) {

            //Se aplica incriptacion a la contraseña del usuario
            let passHash = await bcryptjs.hashSync(password2_usuario, 10);

            //Se agrega la informacion a la tabla 
            connection.query('INSERT INTO users SET ?', {
                nombre: nombre_usuario,
                apellido_paterno: apPat_usuario,
                apellido_materno: apMat_usuario,
                grado: grado_usuario,
                email: email2_usuario,
                password: passHash
            }, async (_error2, _results2) => {

                //Creamos variables de sesion
                req.session.loggedin = true;
                req.session.name = nombre_usuario;

                res.render('inicio', {
                    alert: true,
                    alertTitle: "¡Registrado con éxito!",
                    alertMessage: `Te has registrado con éxito a Mategotchi. ¡Diviertete! ${nombre_usuario}`,
                    alertIcon: 'success',
                    showConfirmButton: true,
                    timer: false,
                    ruta: 'inicio',
                    nombre_usuario: nombre_usuario, 
                });
                
                res.redirect('/inicio');

            });

        } else {

            //Ya hay un usuario con el mismo correo
            res.render('index', {
                alert: true,
                alertTitle: "¡Error!",
                alertMessage: `Al parecer este correo ya esta registrado en otra cuenta. 🤔`,
                alertIcon: 'error',
                showConfirmButton: true,
                timer: false,
                ruta: '' 
            });
            
            res.redirect('/');

        }

    });

}
