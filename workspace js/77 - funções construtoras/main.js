function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    }
}

const p1 = new Pessoa('luiz', 'otavio');
const p2 = new Pessoa('caroline', 'manuella');

p2.metodo();