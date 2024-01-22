const n1 = 1000;
const condPgto = 4;


if (condPgto === 1){
    console.log('pagamento a vista no débito com desconto de 10% gera um total de: R$', (n1 - (n1 * 0.1)));
} else if (condPgto === 2){
    console.log('pagamento a vista no dinheiro ou pix com desconto de 15% gera um total de: R$', (n1 - (n1 * 0.15)));
} else if (condPgto === 3){
    console.log('pagamento parcelado até 02 vezes sem desconto com valor total de: R$', (n1));
} else if (condPgto === 4){
    console.log('pagamento parcelado em varias vezes com júros de 10% com total de: R$', (n1 + (n1 * 0.1)));
}
