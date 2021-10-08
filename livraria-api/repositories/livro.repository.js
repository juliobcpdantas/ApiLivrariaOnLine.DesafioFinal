import { connect } from "./db.js";

//Suport ao endpoint deleteAutor: get de buscas de Livros por autor_id.
async function getLivrosPorAutorId(autorId) {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT * FROM livros WHERE autor_id = $1", [autorId]);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

export default {
    getLivrosPorAutorId
}