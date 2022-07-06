const express = require("express");
const router = express.Router();
const Cadastro = require("../database/Cadastro");

router.get("/admin/delete/:id", (request, response) => {
    const { id } = request.params;

    Cadastro.destroy({
            where: {
                id: id
            }
    }).then(() => {
        console.log("Dados deletados com sucesso!")
        response.redirect("/admin/list");
    })
});

module.exports = router;
