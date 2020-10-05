const lowdb = require("./../bag/server");

// 2 funções 1 para o user normal e o outro pro user admin


// Usuario Normal
function theUser(user) {
	console.log("Em Breve")
}


// Usuario Admin
function theUserAdmin(user) {

	const admin = lowdb.get("usuarios")
		.find({ id: 0 })
		.value()

	if (user.nome.toLowerCase()===admin.nome.toLowerCase()) {

		if (user.pass.toLowerCase()==admin.senha.toLowerCase()) {

			lowdb.get("usuarios")
				.find({ cat: "admin" })
				.assign({ type: "online" })
				.write()
			return true

		} else {
			return false

		}
		
	} else {
		return false

	}

}


module.exports = {
	theUserAdmin,
	theUser
}