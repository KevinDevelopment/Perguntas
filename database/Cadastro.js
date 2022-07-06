const Sequelize = require("sequelize");
const connection = require("./database");

const Cadastro = connection.define('novo_cadastro', {

    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    }

});

Cadastro.sync({force: false}).then(() => {
    console.log("Tabela criada com sucesso!")
}).catch((erro) => {
    console.log(`Ops!, houve um erro ${erro}`)
});

module.exports = Cadastro;