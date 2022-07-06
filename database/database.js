const Sequelize = require("sequelize");
const connection = new Sequelize('perguntas', 'root', '12345', {
    host: "localhost",
    dialect: "mysql",
    logging: false
});

connection.authenticate().then(() => {
    console.log("Conexão bem sucessida!")
}).catch((erro) => {
    console.log(`ops, houve um erro ${erro}`)
});

module. exports = connection;