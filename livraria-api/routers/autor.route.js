import express from "express";
import AutorController from "../controllers/autor.controller.js";

const router = express.Router();

// a) Cadastro de um autor: POST
router.post("/", AutorController.createAutor);
// b) Atualização de um autor: PUT
router.put("/", AutorController.updateAutor);
// c) Exclusão de um autor: DELETE
// c) bloquear exclusão se houver livro seu cadastrado (livro.Service.js)
router.delete("/:id", AutorController.deleteAutor);
// d) Constultar autores cadastrados: GET
router.get("/", AutorController.getAutores);
// e) Consultar autor especifico por Id: GET
router.get("/:id", AutorController.getAutorId);

export default router;