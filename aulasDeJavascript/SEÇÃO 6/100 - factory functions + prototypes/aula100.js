//ESSE METODO É UTILIZADO USANDO OBJECT.ASSIGN
//object.assign

const falar = {

    falar() {
       console.log(`${this.nome} está falando.`);
   },
};

const comer = {

   comer() {

       console.log(`${this.nome} está comendo.`)
   },
};

const beber = {
   
   beber() {
       console.log(`${this.nome} está bebendo.`);
   },

};

const pessoaPrototype = Object.assign({}, falar, comer, beber);
function criaPessoa(nome, sobrenome) {
return Object.create(pessoaPrototype, {
   nome: {value: nome},
   sobrenome: {value: sobrenome},
});
}



const p1 = criaPessoa('luiz', 'otavio');
const p2 = criaPessoa('maria', 'orlinda');
console.log(p2);









   
   
   
   
   
   
   
   
   
   
   
   
   /* USAMOS AQUI O SPREAD OPERATOR

    const falar = {

         falar() {
            console.log(`${this.nome} está falando.`);
        },
    };

    const comer = {

        comer() {

            console.log(`${this.nome} está comendo.`)
        },
    };

    const beber = {
        
        beber() {
            console.log(`${this.nome} está bebendo.`);
        },
    
    };
    
    const pessoaPrototype = {...falar, ...comer, ...beber};
     


function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome},
    });
};
    
    

const p1 = criaPessoa('luiz', 'otavio');
const p2 = criaPessoa('maria', 'orlinda');
console.log(p1);*/