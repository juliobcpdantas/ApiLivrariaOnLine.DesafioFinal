import { connect } from "./db.js";

//Suport ao endpoint deleteCliente: get de buscas de Vendas por cliente_id.
async function getVendasPorClienteId(clienteId) {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT * FROM vendas WHERE cliente_id = $1", [clienteId]);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

export default {
    getVendasPorClienteId
}