import ClienteService from "../services/cliente.service.js";

// 1) Cadastrar um cliente:
async function createCliente(req, res, next) {
    try {
        let cliente = req.body;
        if (!cliente.nome || !cliente.email || !cliente.senha || !cliente.telefone || !cliente.endereco) {
            throw new Error("Name, Email, Senha, Telefone e Endereco são obrigatórios");
        }
        res.send(await ClienteService.createCliente(cliente));//ClienteService
        logger.info(`POST /cliente - ${JSON.stringify(cliente)}`);
    } catch (err) {
        next(err);
    }
}

// 2) Atualização de um cliente:
async function updateCliente() {

}


// 3) Exclusão de um cliente 
// (antes de excluir um cliente, verificar se existem vendas 
// cadastradas para ele. Caso exista, bloquear a exclusão)

async function deleteCliente() {

}


// 4) Consultar os clientes cadastrados 
//(retornar todos os clientes, com todas as informações
// exceto o campo de senha, que não deve ser retornado neste endpoint)
async function getCliente() {

}


// 5) Consultar um cliente em específico 
// (pegar o id do cliente e retornar um objeto JSON com 
// suas informações, com todas as informações exceto o campo de senha,
// que não deve ser retornado neste endpoint)
async function getClienteId() {

}

export default {
    createCliente,
    updateCliente,
    deleteCliente,
    getCliente,
    getClienteId
}