class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;

    } 
    descrever(){
        console.log(`Eu sou ${this.nome} tenho ${this.idade} anos e nasci no ano de ${this.anoDeNascimento}`);
    }
}

function compararPessoas(p1, p2){
    if (p1.idade > p2.idade){
        console.log(`A ${p1.nome} eh mais velho(a) que ${p2.nome}`);

    } else if (p1.idade < p2.idade){
        console.log(`A ${p1.nome} eh mais novo(a) que ${p2.nome}`);

    } else {
        console.log(`${p1.nome} tem a mesma idade que ${p2.nome}`);
    }
    
}

const rafael = new Pessoa('Rafael', 35);
const flaviane = new Pessoa('Flaviane', 35);

compararPessoas(rafael, flaviane);