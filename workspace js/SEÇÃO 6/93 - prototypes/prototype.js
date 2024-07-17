/*Javascript é baseado em protótipos para passar propriedades e métodos
de um objeto para outro.

definição de protótipo
é o termo usado para se referir ao que foi criado pela
primeira vez, servindo de modelo ou molde para futuras produções.

todos os objetos tem uma refeência interna para um protótipo
(__proto__) que vem da propriedade prototype da função construtora que 
foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro
o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia
de protótipos é usada até o topo (null) até encontrar (ou não) tal membro*/






function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'ORIGINAL' + this.nome + ' ' + this.sobrenome;
   
}

//Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

const pessoa1 = new Pessoa('Luiz', '0.'); // <-Pessoa = função construtora
const data = new Date(); // <-- Date = função construtora

console.dir(pessoa1);
console.dir(data);