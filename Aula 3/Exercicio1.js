class Carro{
    constructor(marca, cor, consumoBase, distancia, total) {
        this.marca = marca;
        this.cor = cor;
        this.consumoBase = consumoBase; 
        this.distancia = distancia;
        this.total = this.calcularTotal(); // calcula o total no constructor.
    }
    calcularTotal(){
        return this.consumoBase * this.distancia;
    }

    calculoDoValorGasto(valorCombustivel){
        return this.total * valorCombustivel;
    }
}
    
const honda = new Carro('Toyota', 'Vernelho', 1 / 8, 478);

console.log(honda, "R$", honda.calculoDoValorGasto(5.78).toFixed(2), "Reais");

   
