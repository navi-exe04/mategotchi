function iniciar(sw){
    var pic;
    if(sw==0){
        pic = "../public/img/img_juegos/que hacernivel4.png"
        $("#resultado").show(); 
        $("#boton1").hide();
    }
    document.getElementById('ejercicio1').src=pic;
}
function validarRespuesta(){
    let x = document.forms["myForm"]["fname1"].value;
    let x2 = document.forms["myForm"]["fname2"].value;
    let x3 = document.forms["myForm"]["fname3"].value;
    if (x != '' && x2 != '' && x3 != '')  {
        if(x=='20' && x2=='72' && x3=='49'){
            alert('Respuesta correcta');
            window.location.replace='nivel2.html';
        }else{
            alert('Respuesta incorrecta, reintentalo');
        }
    }else{
        alert("Ingresa una respuesta");
        return false;
    }
}