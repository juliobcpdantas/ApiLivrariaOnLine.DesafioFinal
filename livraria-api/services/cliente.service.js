import ClienteRepository from "../repositories/cliente.repository.js";

async function createCliente(cliente) {
    return await ClienteRepository.createCliente(cliente)
}

export default {
    createCliente
}