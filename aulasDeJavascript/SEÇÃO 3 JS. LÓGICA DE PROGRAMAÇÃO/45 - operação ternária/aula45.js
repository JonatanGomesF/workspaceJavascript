// operador ternário é    ->      ? :
 const pontuacaoUsuario = 9119;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'usuarioVIP' : 'USUARIO NORMAL';

const corUsuario = 'red';
const corPadrao = corUsuario || 'preta';

console.log(nivelUsuario, corPadrao);



