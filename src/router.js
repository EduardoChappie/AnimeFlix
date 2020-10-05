const express = require("express");
const verif = require("./models/Verificacao");
const lowdb = require("./bag/server.js")
const rout = express.Router()
const administrador = lowdb.get("usuarios").find({ cat: "admin" }).value()

rout.get("/", (req, res) => {
	res.render('layouts/index.handlebars')
})


// Rota de Logar
rout.get("/admin", (req, res) => {

	if (administrador.type=="online") {
		res.render('admin/admin.handlebars');

	} else if (administrador.type=="offline") {
		res.render('register/login.handlebars')
	}
})
rout.get("/admin/exit", (req, res) => {
	lowdb.get("usuarios")
		.find({ cat: "admin" })
		.assign({ type: "offline" })
		.write()
})
// Rota de confirmação de login
rout.post("/admin/logar", (req, res) => {

	const user = {
		nome: req.body.admin_name,
		pass: req.body.admin_pass
	}

	const confir = verif.theUserAdmin(user)
	
	if (confir == false) { 
		res.send("Você errou! Por Favor volte e faça de novo")

	} else if(confir == true) {

		res.render("admin/admin.handlebars", {
			adm: lowdb.get("usuarios")
				.find({ id: 0 })
				.value()
		})
	}
})

module.exports = rout