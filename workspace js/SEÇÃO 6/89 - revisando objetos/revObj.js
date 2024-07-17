



























//EXEMPLO DE CONSTRUCTORY FUNCTION
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

}

const p1 = new Pessoa('jonatan', 'gomes');
const p2 = new Pessoa('carol', 'mendes');
console.log(p1);
console.log(p2);
































/*EXEMPLO DE FACTORY FUNCTIONS

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('jonatan', 'gomes');
console.log(p1.nomeCompleto());*/


























/*CAPTURAR A DATA DE NASCIMENTO DE ALGUÉM
const pessoa1 = new Object();
pessoa1.nome = 'jonatan';
pessoa1.sobrenome = 'gomes';
pessoa1.idade = 29;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome.`);

};

pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;

};

console.log(pessoa1.getDataNascimento());*/




















/*const pessoa1 = new Object();
pessoa1.nome = 'luiz';
pessoa1.sobrenome = 'otavio';
pessoa1.falarNome = function() {
    console.log(`${this.nome} está falando seu nome.`);

};

pessoa1.falarNome();*/














/*
const pessoa1 = new Object();
pessoa1.nome = 'luiz';
pessoa1.sobrenome = 'otavio';
pessoa1.falarNome = function() {
    console.log(`${this.nome} está falando seu nome.`);

};

pessoa1.falarNome();*/















/*objeto construtor

const pessoa1 = new Object();
pessoa1.nome = 'jonatan';
pessoa1.sobrenome = 'gomes';


console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);










objeto literal

const pessoa = {
    nome: 'luiz',
    sobrenome: 'otavio'
};


//podemos fazer conforme abaixo usando "(ponto)"
//console.log(pessoa.nome)
//console.log(pessoa.sobrenome)

//podemos fazer conforme abaixo usando "[]" ex --->
//console.log(pessoa['nome']);
//console.log(pessoa['sobrenome']);*/