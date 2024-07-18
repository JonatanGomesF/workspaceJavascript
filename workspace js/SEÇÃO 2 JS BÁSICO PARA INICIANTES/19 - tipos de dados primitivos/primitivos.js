//TIPOS DE DADOS PRIMITIVOS
//string, number, undefined, null, boolean, symbol

const nome = 'luiz'; // isso é uma string
const nome1 = "luiz"; // isso é uma string
const nome2 = `luiz`;// isso é uma string

const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined = não aponta pra local nenhum na memória
let sobrenomeAluno = null;  //nulo ->não aponta pra local nenhum na memória
const aprovado = true; // boolean = true, false (lógico)

let a = 2;
const b = a; // ambos terão o valor 2, porém ambos sustenta realmente 
//seu valor

a = 3;
console.log(a, b); // 3, 2