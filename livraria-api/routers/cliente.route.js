import express from "express";
import ClienteController from "../controllers/cliente.controller.js";

const router = express.Router();

//a) Cadastro de um cliente: POST
router.post("/", ClienteController.createCliente);
//b) Atualização de um cliente: PUT
router.put("/", ClienteController.updateCliente);
// c) Exclusão de um cliente: DELETE
router.delete("/:id", ClienteController.deleteCliente);

export default router;