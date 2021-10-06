import { connect } from "./db.js";

async function createCliente(cliente) {
    const conn = await connect();
    try {
        const sql = "INSERT INTO clientes (nome, email, senha, telefone, endereco) VALUES ($1, $2, $3, $4, $5) RETURNING *"
        const values = [cliente.nome, cliente.email, cliente.senha, cliente.telefone, cliente.endereco];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

export default {
    createCliente
}