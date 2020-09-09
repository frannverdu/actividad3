let btnA = document.getElementById("btnA");
let respuesta = document.getElementById("respuesta")
let rta = "lagarto";
let intento = 0;
let pista = "";
console.log("Llego al adivinanza.js")
let restante = 0;




function check(text){

    intento++;
    console.log(intento);
    
    if (text === rta) {
        swal("EXCELENTE!","GANASTE U$D1000","success");
        restante = 3;
        return;
    }
    if (text != rta){ 
    }
    if (intento == 1){
        pista = "NO!!!!! \n Quedan 3 intentos"
        alert(pista);
        restante = 3;
        return;
    }
    if (intento == 2){
        pista = "ES UN ANIMAL \n Quedan 2 intentos"
        alert(pista);
        restante = 2;
        return;
    }
    if (intento == 3){
        pista = "La primera letra es la L \n Queda 1 intento"
        alert(pista);
        restante = 1;
        return;
    }
    if (intento == 4){
        alert("PERDISTE! La respuesta era EL LARGARTO");
        restante = 0;
        return;
    }
}
function intentorestante (restantes){
    document.getElementById("restante").innerHTML = restante;
}
btnA.addEventListener("click", function(){
    let x = respuesta.value;
    check(x)
    intentorestante(restante)
    
})
