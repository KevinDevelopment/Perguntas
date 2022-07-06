const express = require("express");
const router = express.Router();
const Cadastro = require("../database/Cadastro");




router.get("/admin/list", (request, response) => {

    Cadastro.findAll({
        Raw: true, order: [
            ['id', 'DESC']
        ]
    }).then((Cadastro) => {

        response.render("lista", {
            Cadastro: Cadastro
        })

    });


});

router.get("/admin/list/:id", (request, response) => {
    const { id } = request.params;

    Cadastro.findOne({
        where: {
            id: id
        }
    }).then((cadastro) => {
        if (cadastro != undefined) {
            response.render("detalhes", {
                cadastro: cadastro
            })
        }
        else {
            response.redirect("/");
        }
    })
})

module.exports = router;