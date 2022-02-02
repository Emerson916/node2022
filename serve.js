const http = require("http");

const server = http.createServer((req, res) => {
    //writeHead : define os status do servidor
    res.writeHead(200, {'Content-type': 'application/json'});

    if(req.url === '/produto'){
        res.end(
            JSON.stringify({
                messager : 'Rota de produto',
            })
        );   
    }

    if(req.url === '/user'){
        res.end(
            JSON.stringify({
                messager : 'Rota de usuario',
            })
        );   
    }

    res.end(
        JSON.stringify({
            messager : 'MInha primeira aplicação com node JS',
        })
    );  
    //disponibiliza porta de acesso    
}).listen( 4001, () => console.log("Servidor está rodando na porta 4001"));