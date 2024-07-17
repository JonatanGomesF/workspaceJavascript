//defineProperty -> getters e setters
function Produto(nome, preço, estoque) {
    this.nome = nome;
    this.preço = preço;
    this.estoque = estoque;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable:true, // mostra a chave
        configurable: true, //configurável
        get: function() {
            return estoquePrivado;
        },
        set: function(valor){
            if (typeof valor !== 'number'){
                console.log('bad true');
            }
        estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('camiseta', 20, 3);
console.log(p1);
p1.estoque = 500
console.log(p1.estoque);