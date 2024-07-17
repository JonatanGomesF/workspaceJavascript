//atribuição via desestruturação
 const pessoa = {
    nome:'luiz',
    sobrenome:'miranda',
    idade: 30,
    endereco: {
        rua:'av brasil',
    numero: 320
    }}

    const{endereco:{rua, numero}} = pessoa;
    console.log(rua, numero);


//atribuição via desestruturação
//const pessoa = {
//    nome:'luiz',
//    sobrenome:'miranda',
//    idade: 30,
//    endereco: {
//        rua:'av brasil',
//    numero: 320
//}
//};
//    const nome = pessoa.nome;
//    console.log(nome):