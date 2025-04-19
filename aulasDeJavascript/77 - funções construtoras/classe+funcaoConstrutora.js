class Cliente {
    constructor(nomeEstabelecimento, tipoEstabelecimento, tipoTelhado, whatsapp, endereco, temContaDeLuz) {
        this.nomeEstabelecimento = nomeEstabelecimento;
        this.tipoEstabelecimento = tipoEstabelecimento;
        this.tipoTelhado = tipoTelhado;
        this.whatsapp = whatsapp;
        this.endereco = endereco;
        this.temContaDeLuz = temContaDeLuz;
    }

    descrever() {
        return `
            Cliente ${this.nomeEstabelecimento},
            tipo: ${this.tipoEstabelecimento},
            telhado: ${this.tipoTelhado},
            whatsapp: ${this.whatsapp},
            endereço: ${this.endereco},
            Conta de luz? ${this.temContaDeLuz ? 'Sim' : 'Não'}`;
              
    }
}

//classe pessoa fisica

class PessoaFisica extends Cliente {
    constructor(nomeEstabelecimento, tipoEstabelecimento, tipoTelhado, whatsapp, endereco, temContaDeLuz, dataNascimento, cpf) {
        super(nomeEstabelecimento, tipoEstabelecimento, tipoTelhado, whatsapp, endereco, temContaDeLuz);
        this.tipoCliente = 'Pessoa Fisica';
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
    }

    descrever() {
        return `${super.descrever()} - Pessoa Fisica, CPF: ${this.cpf}, Nasc: ${this.dataNascimento}`;
    }
}

//Classe Pessoa Juridica

class PessoaJuridica extends Cliente {
    constructor(nomeEstabelecimento, tipoEstabelecimento, tipoTelhado, whatsapp, endereco, temContaDeLuz, cnpj) {
        super(nomeEstabelecimento, tipoEstabelecimento, tipoTelhado, whatsapp, endereco, temContaDeLuz);
        this.tipoCliente = 'Pessoa Juridica';
        this.cnpj = cnpj;
    }

    descrever() {
        return `${super.descrever()} - Pessoa Juridica, CNPJ: ${this.cnpj}`;
    }
}

//criando clientes

const clientePF = new PessoaFisica(
    'Mercado da Vila',
    'Mercado',
    'Telha de barro',
    '1199999-8888',
    'Rua das Flores, 123',
    true,
    '10/05/1985',
    '123.456.789-00'
);

const clientePJ = new PessoaJuridica(
    'Construtora Alpha',
    'Construtora',
    'Telha metálica',
    '1198888-7777',
    'Av. Central, 456',
    false,
    '12.345.678/0001-99'
);

// Exibindo os dados

console.log(clientePF.descrever());
console.log(clientePJ.descrever());


// // Função fábrica base
// function criaClienteBase(nomeEstabelecimento, tipoEstabelecimento, tipoTelhado, whatsapp, endereco, temContaDeLuz) {
//     return {
//         nomeEstabelecimento,
//         tipoEstabelecimento,
//         tipoTelhado,
//         whatsapp,
//         endereco,
//         temContaDeLuz,
//         descrever() {
//             return `Cliente: ${this.nomeEstabelecimento}, tipo: ${this.tipoEstabelecimento}, telhado: ${this.tipoTelhado}`;
//         }
//     };
// }

// // Função fábrica para Pessoa Física
// function criaPessoaFisica(
//     nomeEstabelecimento,
//     tipoEstabelecimento,
//     tipoTelhado,
//     whatsapp,
//     endereco,
//     temContaDeLuz,
//     dataNascimento,
//     cpf
// ) {
//     const cliente = criaClienteBase(nomeEstabelecimento, tipoEstabelecimento, tipoTelhado, whatsapp, endereco, temContaDeLuz);
//     return {
//         ...cliente,
//         tipoCliente: 'Pessoa Física',
//         dataNascimento,
//         cpf,
//         descrever() {
//             return `${cliente.descrever()} - Pessoa Física, CPF: ${this.cpf}, Nasc: ${this.dataNascimento}`;
//         }
//     };
// }

// // Função fábrica para Pessoa Jurídica
// function criaPessoaJuridica(
//     nomeEstabelecimento,
//     tipoEstabelecimento,
//     tipoTelhado,
//     whatsapp,
//     endereco,
//     temContaDeLuz,
//     cnpj
// ) {
//     const cliente = criaClienteBase(nomeEstabelecimento, tipoEstabelecimento, tipoTelhado, whatsapp, endereco, temContaDeLuz);
//     return {
//         ...cliente,
//         tipoCliente: 'Pessoa Jurídica',
//         cnpj,
//         descrever() {
//             return `${cliente.descrever()} - Pessoa Jurídica, CNPJ: ${this.cnpj}`;
//         }
//     };
// }

// // Exemplo de uso
// const clientePF = criaPessoaFisica(
//     'Mercado da Vila',
//     'Mercado',
//     'Telha de barro',
//     '1199999-8888',
//     'Rua das Flores, 123',
//     true,
//     '10/05/1985',
//     '123.456.789-00'
// );

// const clientePJ = criaPessoaJuridica(
//     'Construtora Alpha',
//     'Construtora',
//     'Telha metálica',
//     '1198888-7777',
//     'Av. Central, 456',
//     false,
//     '12.345.678/0001-99'
// );

// // Saídas
// console.log(clientePF.descrever());
// console.log(clientePJ.descrever());
