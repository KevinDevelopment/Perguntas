const express = require("express");
const app = express();
const connection = require("./database/database");
const savecontroller = require("./controllers/SaveController");
const listcontroller = require("./controllers/Listcontroller");
const deletecontroller = require("./controllers/DeleteController");
const editcontroller = require("./controllers/EditController");

//configurações express
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

//Rotas
app.use("/", savecontroller);
app.use("/", listcontroller);
app.use("/", deletecontroller);
app.use("/", editcontroller);


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});