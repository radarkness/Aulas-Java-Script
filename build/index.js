"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function apiVersion(version) {
    return (target) => {
        Object.assign(target.prototype, { __version: version });
    };
}
let Api = class Api {
};
Api = __decorate([
    apiVersion("07.97")
], Api);
const api = new Api();
console.log(api.__version);
