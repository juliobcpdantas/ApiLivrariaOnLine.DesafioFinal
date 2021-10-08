import { connect } from "./db.js";

// a) Cadastro de um cliente: POST
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

// b) Atualização de um cliente: PUT
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

// c) Exclusão de um cliente: DELETE 
// c) bloquear exclusão se houver venda cadastrada em seu nome (cliente.Service.js)
async function deleteCliente(id) {
    const conn = await connect();
    try {
        await conn.query("DELETE FROM clientes WHERE cliente_id = $1", [id]);
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

// d) Constultar clientes cadastrados: GET
// d) retornar todos cliente e suas informações, exceto a senha
async function getClientes() {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT cliente_id, nome, email, telefone, endereco FROM clientes");
        return res.rows; 
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

// e) Consultar cliente especifico por Id: GET
// e) retornar o cliente e suas informações, exceto a senha

async function getCliente(id) {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT cliente_id, nome, email, telefone, endereco FROM clientes WHERE cliente_id = $1", [id]);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

export default {
    createCliente,
    updateCliente,
    deleteCliente,
    getClientes,
    getCliente
}