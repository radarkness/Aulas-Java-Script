



function calcularImc(peso, altura){
    return peso / Math.pow (altura, 2);
}
function classificarImc(imc){
    if (imc < 18.5){
        return('abaixo do peso');
    
    }else if (imc > 18.5 && imc <= 25){
        return('Peso normal');
    
    }else if (imc > 25 && imc <= 30){
        return('Está acima do peso');
    
    }else if (imc > 30 && imc <= 40){
        return('Obesidade');
    
    }else if (imc > 40){
        return('Obesidade Grave');
    }
}

(function () {
    const peso = 50;
    const altura = 1.90;
    const imc = calcularImc(peso, altura)
    console.log(classificarImc (imc));
})();


    

