const Book = require('./books.model');

// Middleware de Validação de Dados
const validateBookData = (req, res, next) => {
    const { title, author, year } = req.body;
    
    if (!title || !author || !year) {
        return res.status(400).json({ 
            error: 'Dados inválidos.',
            required: ['title', 'author', 'year'] 
        });
    }

    if (typeof year !== 'number' || isNaN(year)) {
        return res.status(400).json({ error: 'O campo "year" deve ser um número válido.' });
    }
    
    // Se a validação passar, continua para a próxima função (o handler da rota)
    next(); 
};

// GET /api/v1/books
const getBooks = async (req, res) => {
    try {
        const books = await Book.getAll();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: 'Erro interno ao buscar a lista de livros.' });
    }
};

// GET /api/v1/books/:id
const getBookById = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findById(id);

        if (!book) {
            return res.status(404).json({ error: 'Livro não encontrado.' });
        }
        
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ error: 'Erro interno ao buscar o livro.' });
    }
};

// POST /api/v1/books
const createBook = async (req, res) => {
    try {
        const newBook = await Book.create(req.body);
        res.status(201).json(newBook); // 201 Created
    } catch (error) {
        res.status(500).json({ error: error.message || 'Erro interno ao criar o livro.' });
    }
};

// PUT /api/v1/books/:id
const updateBook = async (req, res) => {
    const { id } = req.params;
    
    // NOTE: Reutilizamos o middleware de validação para garantir que os campos estejam corretos
    try {
        const updatedBook = await Book.update(id, req.body);

        if (!updatedBook) {
            return res.status(404).json({ error: 'Livro não encontrado para atualização.' });
        }

        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ error: error.message || 'Erro interno ao atualizar o livro.' });
    }
};

// DELETE /api/v1/books/:id
const deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        const success = await Book.remove(id);

        if (!success) {
            return res.status(404).json({ error: 'Livro não encontrado para exclusão.' });
        }
        
        res.status(204).send(); // 204 No Content
    } catch (error) {
        res.status(500).json({ error: 'Erro interno ao deletar o livro.' });
    }
};

module.exports = {
    getBooks,
    getBookById,
    createBook: [validateBookData, createBook], // Aplica o middleware de validação na criação
    updateBook: [validateBookData, updateBook], // Aplica o middleware de validação na atualização
    deleteBook
};
