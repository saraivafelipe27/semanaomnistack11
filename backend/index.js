const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({ 
        evento: 'Semana OmniStack 11.0',
        Aluno: 'Felipe Oliveira'
    });
})

app.listen(3333);
