/* type Gamer = {
    nome: string;
    vulgo: string;
};

function printaObjeto(pessoa: Gamer){
    console.log(pessoa);
}

printaObjeto({
    nome: "Radarkness",
    vulgo: "Gamer"
}); */

/**
 * variaveis
 */

/*
function addToHello(name: string): string{
    return `Hello ${name}`;
}

function callToPhone(phone: number | string){
    return phone;
}

async function getDataBase(id: string | number): Promise<string | number> {
    return "Está tudo Certo";
}

// dentro das () no getdata, precisa ser um valor do tipo compativel com ID: para exibir o que tem no return.
console.log(getDataBase(87777.7565456415846418787)); 


class Character {
    nome: string;
    stregth: number;
    skill: number;

    constructor(nome: string, stregth: number, skill: number){
        this.nome = nome;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void {
        console.log(`${this.nome} attack with ${this.stregth + this.skill} points, enemy down. Congratulations ${this.nome}, your save princess Zelda and Hyruli`);
    }
}

const p1 = new Character("Link", 400, 255);
p1.attack();


function concatArray<T>(...itens: T[]): T[]{
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([2, 5], [1]);
const stgArray = concatArray<string[]>(["Rafael", "Link","Mario Bross"], ["Megaman"]);

console.log(numArray);
console.log(stgArray);


let dado: string = "Radarkness";
console.log(dado);
*/

function minLenght(length: number) {
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () => "[play]" + _value;
        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor que ${length}`);
            } else {
                _value = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}

class Api {
    @minLenght(5)
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const api = new Api("Rafael");
console.log(api.name);
