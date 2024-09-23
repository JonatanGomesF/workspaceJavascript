const nome = 'luiz';
const sobrenome = 'miranda';

const falaNome = () => {
    console.log(nome, sobrenome);
};

module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;
console.log(exports);