import ClientService from "../services/client.service.js";

// 1) Cadastrar um cliente:
async function createClient(req, res, next) {
    try {
        let client = req.body;
        if (!client.name || !client.email || !client.password || !client.phone || !client.address) {
            throw new Error("Name, Email, Password, Phone e Address são obrigatórios");
        }
        res.send(await ClientService.createClient(client));//ClientService
        logger.info(`POST /client - ${JSON.stringify(client)}`);
    } catch (err) {
        next(err);
    }
}

// 2) Atualização de um cliente:
async function updateClient() {

}


// 3) Exclusão de um cliente 
// (antes de excluir um cliente, verificar se existem vendas 
// cadastradas para ele. Caso exista, bloquear a exclusão)

async function deleteClient() {

}


// 4) Consultar os clientes cadastrados 
//(retornar todos os clientes, com todas as informações
// exceto o campo de senha, que não deve ser retornado neste endpoint)
async function getClient() {

}


// 5) Consultar um cliente em específico 
// (pegar o id do cliente e retornar um objeto JSON com 
// suas informações, com todas as informações exceto o campo de senha,
// que não deve ser retornado neste endpoint)
async function getClientId() {

}

export default {
    createClient,
    updateClient,
    deleteClient,
    getClient,
    getClientId
}