const express = require('express');

const routes = express.Router();

routes.post('/users', (req, res) => {
    const body = req.body;

    console.log(body);
    
    
    return res.json({ 
        evento: 'Semana OmniStack 11.0',
        Aluno: 'Felipe Oliveira'
    });
});

module.exports = routes;
