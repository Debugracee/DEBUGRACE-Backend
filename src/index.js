const express = require('express');
const app = express();
const port = 3500;
const cors = require('cors');
const { response } = require('express');

app.use(express.json());
app.use(cors());

let usuarios = [];

app.get('/usuarios', (req, res) => {
   return res.json({usuarios})

});

app.post('/usuario', (req, res) => {
    const usuario = req.body;
    usuarios.push(usuario);
    return res.send('Deu certo!')
});

app.listen(port, () => {
    console.log(`Rodando na porta: ${port}`)
  });