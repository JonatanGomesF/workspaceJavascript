const pessoas = [
    {id: 3, nome: 'luiz'},
    {id: 2, nome: 'maria'},
    {id: 1, nome: 'helena'},
];

const novasPessoas = {};
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id,  {...pessoa}); //usamos SET aqui para não mudar os valores no console.log

}


// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = {...pessoa};

// }
 