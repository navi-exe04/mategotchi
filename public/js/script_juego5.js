function iniciar(sw){
    var pic;
    if(sw==0){
        pic = "../public/img/img_juegos/nivel5.png"
        $("#resultado").show(); 
        $("#boton1").hide();
    }
    document.getElementById('ejercicio1').src=pic;
}
function validarRespuesta(x){
   // if (x != '')  {
        if(x==1){
            alert('Respuesta correcta');
            window.location.href='nivel5.html';
        }else{
            alert('Respuesta incorrecta, reintentalo');
        }
    /*}else{
        alert("Ingresa una respuesta");
        return false;
    }*/
}