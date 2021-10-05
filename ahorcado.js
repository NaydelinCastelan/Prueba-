var ahorcado = prompt ("Ingrese una palabra para iniciar");
var conta = 0;
var numero = ahorcado.length;
var nOportunidad = 5;
var estatus = 0;
while (nOportunidad >= 0 && conta < numero){
    var ahorcadoL = prompt ("Ingrese una letra");
    var bLetra = 0;
    for (var i = 0; i < numero; i++){
        if (ahorcadoL == ahorcado[i]){
            conta++;
            bLetra = 1;
        }
    }
    if (bLetra == 1){
        console.log("Correcto");
    }else{
        if(nOportunidad == 0){
            console.log("Perdiste");
            estatus = 1;
            break;
        }else{
            console.log("Incorrecto");
            nOportunidad--;
        }
    }
}
if(estatus == 0){
    console.log("1Felicidades ganaste!");
}else{
    console.log("Perdiste, intentalo una vez más");
}