const fs = require('fs/promises');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'data.json');

// Função utilitária para gerar IDs simples
const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
};

/**
 * Lê e retorna todos os livros do arquivo.
 */
const getAll = async () => {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        // Se o arquivo não existir ou for inválido, retorna um array vazio
        return [];
    }
};

/**
 * Salva o array de livros de volta no arquivo.
 */
const saveAll = async (books) => {
    try {
        await fs.writeFile(DATA_FILE, JSON.stringify(books, null, 2));
    } catch (error) {
        console.error('Erro ao salvar dados:', error);
        throw new Error('Não foi possível salvar os dados no disco.');
    }
};

/**
 * Retorna um livro pelo ID.
 */
const findById = async (id) => {
    const books = await getAll();
    return books.find(book => book.id === id);
};

/**
 * Adiciona um novo livro.
 */
const create = async (bookData) => {
    const books = await getAll();
    
    const newBook = {
        id: generateId(), // Gera um ID único
        title: bookData.title,
        author: bookData.author,
        year: bookData.year
    };

    books.push(newBook);
    await saveAll(books);
    return newBook;
};

/**
 * Atualiza um livro existente pelo ID.
 */
const update = async (id, updatedData) => {
    const books = await getAll();
    const index = books.findIndex(book => book.id === id);

    if (index === -1) {
        return null; // Não encontrado
    }

    // Mantém o ID original e atualiza os demais campos
    books[index] = { ...books[index], ...updatedData, id }; 
    
    await saveAll(books);
    return books[index];
};

/**
 * Deleta um livro pelo ID.
 */
const remove = async (id) => {
    const books = await getAll();
    const initialLength = books.length;
    
    const filteredBooks = books.filter(book => book.id !== id);

    if (filteredBooks.length === initialLength) {
        return false; // Não encontrado
    }

    await saveAll(filteredBooks);
    return true;
};


module.exports = {
    getAll,
    findById,
    create,
    update,
    remove
};
