import express from "express";
import ClienteController from "../controllers/cliente.controller.js";

const router = express.Router();

//a) Cadastro de um cliente: POST
router.post("/", ClienteController.createCliente);
//b) Atualização de um cliente: PUT
router.put("/", ClienteController.updateCliente);
//c) Exclusão de um cliente: DELETE
router.delete("/:id", ClienteController.deleteCliente);
// d) Constultar clientes cadastrados: GET
router.get("/", ClienteController.getClientes);
// e) Consultar cliente especifico por Id: GET
router.get("/:id", ClienteController.getClienteId);

export default router;