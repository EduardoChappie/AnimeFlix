const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('bag.json')
const db = low(adapter)

db.defaults({
	animes: [],
	filmes: [],
	usuarios: []
}).write();


module.exports = db