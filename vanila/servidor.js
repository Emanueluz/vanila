let url = require('url')
const http = require('http')
const rotas = require('./rota')





function aux (r, q) {
    let parsedURL = url.parse(q.url, true)
    let path = parsedURL.pathname
    path = path.replace(/^\/+|\/+$/g, "")
    if (path == ""){
      path = "default"
    }
    let route = typeof routes[path] !== "undefined" ? routes[path] : routes["notFound"]
    route(r)
  } 






class server{
    constructor(host, porta){
        this.host=host
        this.porta=porta
    }

liga(){
    const server = http.criaserver(sux(q,s))
    server.listen(this.porta, () => {
        console.log(`Server running at http://${this.hostname}:${this.porta}/`)
      })
}


liga_dev(){
    const server = http.criaserver(sux(q,s))
    server.listen(this.porta, () => {
        console.log(`Server running at http://${this.hostname}:${this.porta}/`)
      })
  }
}
