const express = require("express");
const verif = require("./models/Verificacao");
const rout = express.Router()

rout.get("/", (req, res) => {
	res.render('layouts/index.handlebars')
})


// Rota de Logar
rout.get("/admin", (req, res) => {
	res.render('register/login.handlebars')
})
rout.post("/admin/logar", (req, res) => {

	const user = {
		nome: req.body.admin_name,
		pass: req.body.admin_pass
	}

	const confir = verif.theUserAdmin(user)
	
	if (confir == false) { 
		res.send("Você não é o Admin >:v")

	} else if(confir == true) {
		res.send("Admin Confirmado")

	}
})

module.exports = rout