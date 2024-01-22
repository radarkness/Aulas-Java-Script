        class Pessoa{
        constructor(nome, altura, peso, imc){
            this.nome = nome;
            this.altura = altura;
            this.peso = peso;
            this.imc = this.calcularImc();
        }
            calcularImc(){
                return this.peso / (this.altura * this.altura);
            }
            classificarImc(){
                const classificarImc = this.calcularImc;
                if(this.imc > 40){
                return 'Obsidade nivel thais Carla';
        }    else if(this.imc < 40 && this.imc >= 30){
                return 'Você está Obeso';
        }   else if(this.imc < 30 && this.imc >= 25){
                return 'Você está acima do peso';
        }   else if(this.imc < 25 && this.imc >= 18){
                return 'Peso Normal';
        }   else if(this.imc < 18){
                return 'Abaixo do peso';
        }   
    } 
}   


const rafael = new Pessoa('Rafael', 1.89, 130);
console.log(`Nome ${rafael.nome} Altura ${rafael.altura} Peso ${rafael.peso} Calculo IMC ${rafael.imc.toFixed(2)} categoria Imc ${rafael.classificarImc()}`);