import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send(`<form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
        `);
});


app.post('/', (req, res) => {
    res.send('Recebi o formulário');
});


app.listen(3000, () => {
    console.log('acessar http://localhost:3000')
    console.log('Servidor rodando na porta 3000')
});
