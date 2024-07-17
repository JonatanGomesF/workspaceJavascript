function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        fala: function(assunto) {
            return '${nome} está ${assuntoo}.';

        }
    };
}

const p1 = criaPessoa('luiz', 'otavio');
console.log(p1.fala('falando de JS'));