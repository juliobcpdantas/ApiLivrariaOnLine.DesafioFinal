import AutorService from "../services/autor.service.js";

// a) Cadastro de um autor: POST
async function createAutor(req, res, next) {
    try {
        let autor = req.body;
        if (!autor.nome || !autor.email || !autor.telefone) {
            throw new Error("Nome, Email e Telefone são obrigatórios");
        }
        res.send(await AutorService.createAutor(autor));//AutorService
        logger.info(`POST /autor - ${JSON.stringify(autor)}`);
    } catch (err) {
        next(err);
    }
}

// b) Atualização de um autor: PUT
async function updateAutor(req, res, next) {
    try {
        let autor = req.body;
        if (!autor.autor_id || !autor.nome || !autor.email || !autor.telefone) {
            throw new Error("Autor ID, Nome, Email e Telefone são obrigatórios.");
        }        
        autor = await AutorService.updateAutor(autor);
        res.send(autor);
        logger.info(`PUT /autor - ${JSON.stringify(autor)}`);
    } catch (err) {
        next(err);
    }
}

// c) Exclusão de um autor: DELETE
// c) bloquear exclusão se houver livro seu cadastrado (livro.Service.js)
async function deleteAutor(req, res, next) {
    try {
        await AutorService.deleteAutor(req.params.id)
        res.end();
        logger.info("DELETE /autor");
    } catch (err) {
        next(err);
    }
}

// d) Constultar autores cadastrados: GET
async function getAutores(req, res, next) {
    try {
        res.send(await AutorService.getAutores());
        logger.info("GET /autor");
    } catch (err) {
        next(err);
    }
}

// e) Consultar autor especifico por Id: GET
async function getAutorId(req, res, next) {
    try {
        res.send(await AutorService.getAutor(req.params.id));
        logger.info("GET /autor");
    } catch (err) {
        next(err);
    }
}

export default {
    createAutor,
    updateAutor,
    deleteAutor,
    getAutores,
    getAutorId
}