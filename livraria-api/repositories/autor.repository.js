import { connect } from "./db.js";

// a) Cadastro de um autor: POST
async function createAutor(autor) {
    const conn = await connect();
    try {
        const sql = "INSERT INTO autores (nome, email, telefone) VALUES ($1, $2, $3) RETURNING *"
        const values = [autor.nome, autor.email, autor.telefone];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

// b) Atualização de um autor: PUT
async function updateAutor(autor) {
    const conn = await connect();
    try {
        const sql = 
            "UPDATE autores " +
            "   SET nome = $1, email = $2, telefone = $3 " +
            " WHERE autor_id = $4 RETURNING *";
        const values = [autor.nome, autor.email, autor.telefone, autor.autor_id];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

// c) Exclusão de um autor: DELETE
// c) bloquear exclusão se houver livro seu cadastrado (livro.Service.js)
async function deleteAutor(id) {
    const conn = await connect();
    try {
        await conn.query("DELETE FROM autores WHERE autor_id = $1", [id]);
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

// d) Constultar autores cadastrados: GET
async function getAutores() {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT autor_id, nome, email, telefone FROM autores");
        return res.rows; 
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

// e) Consultar autor especifico por Id: GET
async function getAutor(id) {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT autor_id, nome, email, telefone FROM autores WHERE autor_id = $1", [id]);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

export default {
    createAutor,
    updateAutor,
    deleteAutor,
    getAutores,
    getAutor
}