const express = require("express");
const router = express.Router();
const Cadastro = require("../database/Cadastro");

router.get("/", (request, response) => {
    response.render("index");
});

router.post("/admin/save", (request, response) => {

    const { nome, sobrenome, descricao } = request.body;

    if (!nome || !sobrenome || !descricao) {

        response.redirect("/")

    }
    else {

        Cadastro.create({

            nome: nome,
            sobrenome: sobrenome,
            descricao: descricao

        }).then(() => {
            console.log("Dados inseridos")
            response.redirect("/admin/list")
        }).catch((erro) => {
            console.log(`Ops!, houve um erro ${erro}`)
        })
    };




});

module.exports = router;