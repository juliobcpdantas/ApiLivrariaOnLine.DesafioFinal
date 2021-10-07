import ClienteRepository from "../repositories/cliente.repository.js";
// importar VendasRepository para validação de deleteCliente
import VendasRepository from "../repositories/venda.repository.js";

//a) Cadastro de um cliente: POST
async function createCliente(cliente) {
    return await ClienteRepository.createCliente(cliente)
}

//b) Atualização de um cliente: PUT
async function updateCliente(cliente) {
    return await ClienteRepository.updateCliente(cliente);
}

// c) Exclusão de um cliente: DELETE 
// bloquear exclusão se houver venda cadastrada em seu nome
async function deleteCliente(id) {
    //Criar getVendasPorClienteId em vendas.Repository.js
    if (await VendasRepository.getVendasPorClienteId(id)) {
        throw new Error("Cliente não pode ser deletado, Venda Vinculada")
}
    return await ClienteRepository.deleteCliente(id);
}

export default {
    createCliente,
    updateCliente,
    deleteCliente
}