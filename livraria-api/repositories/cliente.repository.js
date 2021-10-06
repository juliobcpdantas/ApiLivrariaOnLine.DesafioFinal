import { connect } from "./db.js";

//a) Cadastro de um cliente: POST
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

//b) Atualização de um cliente: PUT
async function updateCliente(cliente) {
    const conn = await connect();
    try {
        const sql = 
            "UPDATE clientes " +
            "   SET nome = $1, email = $2, senha = $3, telefone = $4, endereco = $5 " +
            " WHERE cliente_id = $6 RETURNING *";
        const values = [cliente.nome, cliente.email, cliente.senha, cliente.telefone,
             cliente.endereco, cliente.cliente_id];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

export default {
    createCliente,
    updateCliente
}