function iniciar() {
    cedula = document.getElementById("cedula");
    cedula.addEventListener("input", validarCedula, false);
    document.validador.addEventListener("invalid",validacion, true);
    document.validador.addEventListener("input", controlar,false);
    document.getElementById("validar").addEventListener("click",enviar, false);
}
function validacion(e){
    var elemento=e.target;
    elemento.style.accentColor='#FF0000';
}
function enviar(){
    var valido=document.validador.checkValidity();
    if(valido){
        document.validador.submit();
    }
}
function controlar(e){
    var elemento=e.target;
    if(elemento.validity.valid){
        elemento.style.accentColor='#FFFFFF';
    }
    else{
        elemento.style.accentColor='#FF0000';
    }
}
function validarCedula() {
    let cadenaCedula = cedula.value;
    let numeroDigitos= cadenaCedula.length;
    let arreglo = {};
    let digito;
    let digitoString;
    let sumatoriaDigitos = 0;
    let digitoChequeo;

    for(let i = 0;i < numeroDigitos - 1; i++) {
        digito = Number(cadenaCedula[i]);
        if(i%2 != 0) {
            digito = digito * 2;
            digitoString = digito.toString();
            if(digitoString.length == 2)
                digito = Number(digitoString[0]) + Number(digitoString[1]);
        }
        arreglo[i] = digito;
        sumatoriaDigitos += digito;
    }
 
    digitoChequeo = sumatoriaDigitos*9 % 10;

    if(cadenaCedula[numeroDigitos - 1] == digitoChequeo) 
        cedula.setCustomValidity('');
    else {
        cedula.setCustomValidity('cedula erronea');
        cedula.style.accentColor='#FF0000';
    }
}
window.addEventListener("load", iniciar, false);
