import ClienteRepository from "../repositories/cliente.repository.js";

//a) Cadastro de um cliente: POST
async function createCliente(cliente) {
    return await ClienteRepository.createCliente(cliente)
}

//b) Atualização de um cliente: PUT
async function updateCliente(cliente) {
    return await ClienteRepository.updateCliente(cliente);
}

export default {
    createCliente,
    updateCliente
}