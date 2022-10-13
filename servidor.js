let url = require('url')
const http = require('http')
const routes = require('./rota')
 

class Server {
  constructor(hostname, port) {
    this.hostname = hostname
    this.port = port
  }

  liga(){
    const server = http.createServer(function(req, res) {
      let parsedURL = url.parse(req.url, true)
      let path = parsedURL.pathname
      path = path.replace(/^\/+|\/+$/g, "")
      if (path == ""){path = "default"}
      let route = typeof routes[path] !== "undefined" ? routes[path] : routes["notFound"]
      route(res)
    } )
    server.listen(this.port, () => {
      console.log(`servidor  running at http://${this.hostname}:${this.port}/`)
    })
  }

  liga_dev(){
    const server = http.createServer(function(req, res) {
      let parsedURL = url.parse(req.url, true)
      let path = parsedURL.pathname
      path = path.replace(/^\/+|\/+$/g, "")
      if (path == ""){
        path = "default"
      }
      let route = typeof routes[path] !== "undefined" ? routes[path] : routes["notFound"]
      route(res)
    } )
    server.listen(this.port, this.hostname, () => {
      console.log(`servidor running at http://${this.hostname}:${this.port}/`)
    })
  }
}

module.exports = Server