const express = require('express');
const booksController = require('./src/books.controller');

const app = express();
const PORT = 3000;

// Middleware para processar o corpo das requisições como JSON
app.use(express.json());

// --- ROTAS DA API ---
const router = express.Router();
const API_PREFIX = '/api/v1/books';

// Rota de Leitura (GET All)
router.get('/', booksController.getBooks); 

// Rota de Criação (POST) - Usa o middleware de validação
router.post('/', booksController.createBook); 

// Rota de Leitura por ID (GET One)
router.get('/:id', booksController.getBookById);

// Rota de Atualização (PUT) - Usa o middleware de validação
router.put('/:id', booksController.updateBook); 

// Rota de Deleção (DELETE)
router.delete('/:id', booksController.deleteBook); 

// Adiciona as rotas ao prefixo da API
app.use(API_PREFIX, router);


// Rota base para teste
app.get('/', (req, res) => {
    res.send('API RESTful de Livros rodando! Acesse /api/v1/books');
});


// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor Node.js rodando em http://localhost:${PORT}`);
    console.log('Use CTRL+C para sair.');
});
