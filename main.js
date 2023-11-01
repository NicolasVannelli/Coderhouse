/* Voy a hacer un calculador de IMC(Indice de masa corporal) */


function inicilizar() {
    let ejecutar = true
    while (ejecutar === true){
        calculadora()
        reejecutar = confirm("¿Quieres reintentar?")
        if(reejecutar===true){
            ejecutar==true
        }
        else{
            ejecutar=false
            alert("Hasta luego!")
        }
    }
}

function calculadora() {
    let peso = prompt("Ingrese su peso")
    let altura = prompt("Ingrese su altura en metros dividida por punto")
    let IMC = peso / (altura * altura)
    if (IMC <= 18.5 && IMC > 12.0) {
        alert("Estas por debajo del peso promedio")
    }
    else if (IMC > 18.5 && IMC <= 24.9) {
        alert("Estas en un peso normal")
    }
    else if (IMC > 24.9 && IMC <= 29.9) {
        alert("Estas un poco sobre peso")
    }
    else if (IMC > 29.9) {
        alert("Estas en sobre peso")
    }
    else {
        alert("Ingresó mal algún dato, por favor reintente")
        calculadora()
    }
}
inicilizar()
