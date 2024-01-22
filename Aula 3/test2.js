class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Eu sou ${this.nome} e tenho ${this.idade} anos`);
    }
}

const rafael = new Pessoa('Rafael', 33);


console.log(rafael);
    