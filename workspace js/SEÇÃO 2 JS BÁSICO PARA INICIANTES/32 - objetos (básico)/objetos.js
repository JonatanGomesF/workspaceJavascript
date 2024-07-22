const pessoa1 = {
    nome: 'jonatan',
    sobrenome: 'gomes',
    idade: 29,

    fala() {
        console.log(`a minha idade atual é ${this.idade}.`)
    },

    incrementaIdade() {
        this.idade++;
    }
};
pessoa1.fala()
pessoa1.incrementaIdade();
pessoa1.fala();

pessoa1.fala()
pessoa1.incrementaIdade();
pessoa1.fala();



















//TEMOS AQUI UMA FACTORY FUNCTION (ELA CRIA , ELA RETORNA OBJETOS)
//                   parâmetro
// function criaPessoa (nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }
//                         //  argumento   
// const pessoa1 = criaPessoa('ronald', 'otavio', 21);
// const pessoa2 = criaPessoa('elias', 'messias', 33);
// const pessoa3 = criaPessoa('gustavo', 'da silva', 25);
// const pessoa4 = criaPessoa('luiz', 'peixoto', 55);

//  // nessas situações conseguimos retornar valor da variavel utilizando o objeto
// console.log(pessoa3.nome);
// console.log(pessoa4.idade);
// console.log(pessoa3.idade);


















//para criar um objeto (literal) utilizo: { }, para array: [ ].
// const pessoa1 = {  
//     nome: 'luiz',
//     sobrenome: 'miranda',
//     idade: 25
// };
// const pessoa2 = {  
//     nome: 'maria',
//     sobrenome: 'miranda',
//     idade: 24
// };

//  //ATRAVÉS DA ANOTAÇÃO DE PONTO consigo acessar ao nome da pessoa, dentro do obj
// console.log(pessoa1.nome);
// console.log(pessoa2.idade);
// console.log(pessoa1.nome);














//DECLARAMOS VARIÁVEL SEM OBJETO, FICA MUITO EXTENSO CONFORME ABAIXO,
//SENDO QUE PODEMOS AGRUPAR TUDO ISSO DENTRO DE UM OBJETO;

// const nome01 = 'jonatan';
// const sobrenome01 = 'gomes';
// const idade = 29;

// const nome02 = 'maria';
// const sobrenome02 = 'gomes';
// const idade = 27;
