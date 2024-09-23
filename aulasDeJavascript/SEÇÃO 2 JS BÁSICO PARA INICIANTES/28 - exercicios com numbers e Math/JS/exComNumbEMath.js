//exercicios com numbers e Math

const numero = Number(prompt('digite seu numero:?'))
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = ' ';
texto.innerHTML += `<p>raiz quadrada desse numero é: ${numero ** 0.5}.</p>`; // raiz quadrada
texto.innerHTML += `<p> esse numero é inteiro? ${Number.isInteger(numero)}.</p>`; //verificação se é inteiro
texto.innerHTML += `<p> esse numero é NaN? ${Number. isNaN(numero)}.</p>`; //verificando se é NaN
texto.innerHTML += `<p> arredondamento para baixo: ${Math.floor(numero)}.</p>`; //arredondando para baixo
texto.innerHTML += `<p> arredondamento para cima: ${Math.ceil(numero)}.</p>`; // arredondamento para cima
texto.innerHTML += `<p> com duas casas decimais: ${numero.toFixed(2)}.</p>`; // casas decimais (em reais)
