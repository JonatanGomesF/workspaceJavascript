import express from 'express';

const app = express();

// Middleware para processar dados de formulários
app.use(express.urlencoded({ extended: true }));

// Rota GET para exibir o formulário
app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `);
});

// Rota POST para receber o dado do formulário
app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que foi enviado a mim foi: ${req.body.nome}`);
});

// Inicia o servidor
app.listen(3001, () => {
    console.log('Acessar http://localhost:3001');
    console.log('Servidor rodando na porta 3001');
});
