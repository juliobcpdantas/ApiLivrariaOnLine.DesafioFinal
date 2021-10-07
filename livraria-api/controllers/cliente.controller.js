import ClienteService from "../services/cliente.service.js";

//a) Cadastro de um cliente: POST
async function createCliente(req, res, next) {
    try {
        let cliente = req.body;
        if (!cliente.nome || !cliente.email || !cliente.senha ||
             !cliente.telefone || !cliente.endereco) {
            throw new Error("Name, Email, Senha, Telefone e Endereco são obrigatórios");
        }
        res.send(await ClienteService.createCliente(cliente));//ClienteService
        logger.info(`POST /cliente - ${JSON.stringify(cliente)}`);
    } catch (err) {
        next(err);
    }
}

//b) Atualização de um cliente: PUT
async function updateCliente(req, res, next) {
    try {
        let cliente = req.body;
        if (!cliente.cliente_id || !cliente.nome || !cliente.email ||
             !cliente.senha || !cliente.telefone || !cliente.endereco) {
            throw new Error("Cliente ID, Nome, Email, Senha, Telefone e Endereço são obrigatórios.");
        }        
        cliente = await ClienteService.updateCliente(cliente);
        res.send(cliente);
        logger.info(`PUT /cliente - ${JSON.stringify(cliente)}`);
    } catch (err) {
        next(err);
    }
}

// 3) Exclusão de um cliente 
// (antes de excluir um cliente, verificar se existem vendas 
// cadastradas para ele. Caso exista, bloquear a exclusão)

async function deleteCliente(req, res, next) {
    try {
        await ClienteService.deleteCliente(req.params.id)
        res.end();
        logger.info("DELETE /cliente");
    } catch (err) {
        next(err);
    }
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