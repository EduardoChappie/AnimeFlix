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

	if (user.nome===admin.nome) {
		if (user.pass==admin.senha) {
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