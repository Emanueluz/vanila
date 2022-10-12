const fs = require('fs');

let rotas = {
    default: (res) => responde(res, "pagina1.html"),
    rota2: (res) => responde(res, "pagina2.html"),
    notFound: (res) => responde(res, "erro.html"),
  }

function responde(res, pag){
  res.setHeader("Content-Type", "text/html")
  res.setHeader("Access-Control-Allow-Origin", "*")
  a.readFile(pag, (err, data) => {
    res.end(data)
    return
    })
}

module.exports = rotas
