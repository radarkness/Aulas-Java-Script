const capitalInicial = parseFloat(gets());
const taxaJuros = parseFloat(gets());
const tempoMeses = parseInt(gets());

//!isNaN é uma função embutida em JavaScript que verifica se o valor passado como argumento não é um número.
if (!isNaN(capitalInicial) && !isNaN(taxaJuros) && !isNaN(tempoMeses) && tempoMeses > 0) {
//TODO: Calcule o montante usando a fórmula de juros simples e o montante final somando o juros simples ao capital inicial:
  const jurosSimples = (capitalInicial * taxaJuros * tempoMeses) / 100;
  const montanteFinal = capitalInicial + jurosSimples;

//TODO: Imprima o resultado com formatação, incluindo o período, o capital inicial, a taxa de juros e o montante final:
//Lembre-se: Até duas casas decimais para o Capital Inicial e o Montante Final.
  print(`Montante em ${tempoMeses} meses, com R$ ${capitalInicial.toFixed(2)} iniciais, ${taxaJuros}% juros, e: R$ ${montanteFinal.toFixed(2)}`);
} else {
  print('Por favor, insira valores validos e um periodo de tempo adequado.');
}  