const express = require("express");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars")
const path = require("path")

const App = express();

const Router = require("./router")
const lowdb = require("./bag/server");

// Importação do bodyParser
App.use(bodyParser.urlencoded({ extended: true }))
App.use(bodyParser.json())

//Handlebars
App.set('views', path.join(__dirname, 'views'));
App.engine('handlebars', handlebars({defaultLayout: 'main'}))


//Importação dos Pacotes
App.use(express.static(path.join(__dirname, "public")))


App.use(Router)


const port = 8081
App.listen(port, console.log("localhost:" + port))