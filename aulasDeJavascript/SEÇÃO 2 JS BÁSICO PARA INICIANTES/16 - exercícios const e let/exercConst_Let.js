const nome = 'jonatan gomes';
const sobrenome = 'floriano';
const idade = 29;
const peso = 113;
const altura = 1.90;
let imc; // peso / (altura * altura)
let anoNascimento;

const result = peso / (altura * altura);
anoNascimento = 2024 - idade;

console.log(`${nome} ${sobrenome} tem ${idade}
    anos, pesa ${peso} kg, tem ${altura}
    de altura e seu imc é de ${result}
    ${nome} nasceu em ${anoNascimento}.`

)



/*console.log(nome, sobrenome, 'tem', idade, 'anos', 'pesa', peso,'kg',
    'tem', altura, 'de altura', 'e seu IMC é de:', result, nome, sobrenome,
    'nasceu em', anoNascimento
)
*/