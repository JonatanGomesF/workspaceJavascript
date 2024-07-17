// (condição) ? 'valor para verdadeiro' : 'valor para falso';

const pontuacaoUSuario = 500
const nivelUsuario = pontuacaoUSuario >= 1000 ? 'usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'preta';

console.log(nivelUsuario, corPadrao);



//const pontuacaoUSuario = 999;

//if (pontoacaoUSuario >= 1000) {
 //   console.log('Usuario VIP');
//} else {
 //   console.log('Usuário normal');
//}

