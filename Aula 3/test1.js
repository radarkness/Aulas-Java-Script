const pessoa = {
    nome: "Rafael Pinheiro",
    idade: 33,
    força: "Mais de 8.000",

    descrever: function () {
        console.log(`Meu nome é ${this.nome} Minha idade é ${this.idade} e o total de força é ${this.força}`); 
    }

};

pessoa.descrever();


