const preçoGasolina = 5.79;
const preçoEtanol = 2.90;
const consumoMedioPorLitro = 10;
const tipoDeCombustivel = 'etanol';
const distancia = 450;

const gastoPorViagem = distancia / consumoMedioPorLitro;
if (tipoDeCombustivel === "etanol"){
    const total = gastoPorViagem * preçoEtanol;
    console.log(total.toFixed(2));
} else{
    const total = gastoPorViagem * preçoGasolina;
    console.log(total.toFixed(2));
}
