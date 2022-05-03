function iniciar(sw){
    var pic;
    if(sw==0){
        pic = "../public/img/img_juegos/Ejercicio1.png"
        $("#resultado").show(); 
        $("#boton1").hide();
    }
    document.getElementById('ejercicio1').src=pic;
}
function validarRespuesta(){
    let x = document.forms["myForm"]["fname"].value;
    if (x != '')  {
        if(x=='6'){
            alert('Respuesta correcta');
            window.location.href='nivel2.html';
        }else{
            alert('Respuesta incorrecta, reintentalo');
        }
    }else{
        alert("Ingresa una respuesta");
        return false;
    }
}
