const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
    const urlinfo = require('url').parse(req.url, true)
    const name = urlinfo.query.name
    
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    
    if(!name){
        res.end('<h1>Preencha o sue nome: </h1><form method="GET"><input type="text" name="name" /><input type="submit" value="Enviar"></form>')
    }else {
        res.end(`<h1>Seja bem-vindo ${name}!</h1>`)
    }
})

server.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
})