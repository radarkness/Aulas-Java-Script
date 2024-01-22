var peso = 110;
var altura = 1.92;
var imc = peso / Math.pow (altura, 2);

if (imc < 18.5){
    console.log('abaixo do peso');

}else if (imc > 18.5 && imc <= 25){
    console.log('Peso normal');

}else if (imc > 25 && imc <= 30){
    console.log('Está acima do peso');

}else if (imc > 30 && imc <= 40){
    console.log('Obesidade');

}else if (imc > 40){
    console.log('Obesidade Grave');
}
console.log(imc.toFixed(2));