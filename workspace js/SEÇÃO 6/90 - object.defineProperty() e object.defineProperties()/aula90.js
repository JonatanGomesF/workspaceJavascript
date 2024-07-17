//defineProperty - defineProperties
function Produto(nome, preço, estoque) {
    this.nome = nome;
    this.preço = preço;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable:true, // mostra a chave
        value: estoque, // valor
        writable:false, // pode alterar valor
        configurable: true //configurável
    });
}
const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

//PROPERTIES
function Produto(nome, preço, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar
        configurable: true // configurável
    });
}

Object.defineProperties(this, {
    nome: {
        enumerable: true, // mostra a chave
        value: nome, // valor
        writable: true, // pode alterar
        configurable: true, // configurável
    },
    preço: {
        enumerable: true, // mostra a chave
        value: nome, // valor
        writable: true, //pode alterar
    }
});

const p1 = new Produto('Camiseta', 20, 3);
console.log(object.keys(p1));