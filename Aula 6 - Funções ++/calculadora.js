function calculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n 1 - soma(+)\n 2 - subtração(-)\n 3 - multiplicação(*)\n 4 - divisão(/)\n 5 - divisão_inteira(%)\n 6 - potenciação(**)'));

    let n1 = Number(prompt('insira um valor:'));
    let n2 = Number(prompt('insira outro valor:'));
    let resultado;

    function soma(){
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
        novaOperacao();
    }
    function subtração(){
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
        novaOperacao();
    }
    function multiplicação(){
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`)
        novaOperacao();
    }
    function divisão(){
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
        novaOperacao();
    }
    function divisão_inteira(){
        resultado = n1 % n2;
        alert(`O Resultado entre ${n1} e ${n2} é igual a ${resultado}`)
        novaOperacao();

    }
    function potenciação(){
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`)
        novaOperacao();
    }

    function novaOperacao(){
        let opcao = prompt('Deseja fazer uma nova operação?\n 1 - sim \n 2 - não')
        
        if (opcao == 1) {
            calculadora();
        } else if (opcao == 2); {
            alert ('muito obrigado, até a próxima');
        } else (){
            alert ('Digite uma opção valida Caralho');
            novaOperacao();
        }

    }


    if (operacao == 1){
        soma();
    }    else if (operacao == 2){
         subtração();
    }    else if (operacao == 3){
         multiplicação();
    }    else if (operacao == 4){
         divisão();
    }    else if (operacao == 5){
         divisão_inteira();
    }    else if (operacao == 6){
         potenciação();
    }

}
calculadora();