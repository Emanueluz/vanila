const serv  = require('./servidor');

const host= '127.0.0.1'
const port = process.env.PORT || 3000

const servidor = new serv(host, port)

servidor.liga()