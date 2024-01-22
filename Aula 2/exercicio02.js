
function aplicarDesconto(valor, desconto){
    return 'pagamento a vista no débito com desconto de 10% gera um total de: R$', (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros){
    return 'pagamento parcelado em varias vezes com júros de 10% com total de: R$', (valor + (valor * (juros / 100)));
}


const n1 = 1000; // Valor da dívida
const condPgto = 4; // Forma de pagamento


if (condPgto === 1){
    console.log('pagamento a vista no débito com desconto de 10% gera um total de: R$', (aplicarDesconto(n1, 10)));
} else if (condPgto === 2){
    console.log('pagamento a vista no dinheiro ou pix com desconto de 15% gera um total de: R$', (aplicarDesconto(n1, 15)));
} else if (condPgto === 3){
    console.log('pagamento parcelado até 02 vezes sem desconto com valor total de: R$', (n1));
} else if (condPgto === 4){
    console.log('pagamento parcelado em varias vezes com júros de 10% com total de: R$', (aplicarJuros(n1, 10)));
}
