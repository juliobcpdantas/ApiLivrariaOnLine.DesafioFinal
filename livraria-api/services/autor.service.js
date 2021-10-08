import AutorRepository from "../repositories/autor.repository.js";
// importar LivrosRepository para validação de deleteAutor
import LivrosRepository from "../repositories/livro.repository.js";

// a) Cadastro de um autor: POST
async function createAutor(autor) {
    return await AutorRepository.createAutor(autor)
}
// b) Atualização de um autor: PUT
async function updateAutor(autor) {
    return await AutorRepository.updateAutor(autor);
}

// c) Exclusão de um autor: DELETE
// c) bloquear exclusão se houver livro seu cadastrado (livro.Service.js)
async function deleteAutor(id) {
    //Criar getLivroPorAutorId em livro.Repository.js
    if (await LivrosRepository.getLivrosPorAutorId(id)) {
        throw new Error("Autor não pode ser deletado, Livro Vinculada")
}
    return await AutorRepository.deleteAutor(id);
}

// d) Constultar autores cadastrados: GET
async function getAutores() {
    return await AutorRepository.getAutores();
}

// e) Consultar autor especifico por Id: GET
async function getAutor(id) {
    return await AutorRepository.getAutor(id);
}

export default {
    createAutor,
    updateAutor,
    deleteAutor,
    getAutores,
    getAutor
}