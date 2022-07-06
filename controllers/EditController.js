const express = require("express");
const router = express.Router();
const Cadastro = require("../database/Cadastro");

router.get("/admin/editar", (request, response) => {
    response.render("editar")
});

router.post("/admin/update", (request, response) => {
    const { id, nome, sobrenome, descricao } = request.body;

    Cadastro.update({
        nome: nome,
        sobrenome: sobrenome,
        descricao: descricao
    }, {
        where: {
            id:id
        }
    }).then(() => {
        response.redirect("/admin/list")
    });
});

module.exports = router;