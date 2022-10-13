const Server = require('./servidor');
const host = '127.0.0.1'
const porta = process.env.PORT || 3000
const server = new Server(host, porta)
server.liga()