const express = require("express")

const app = express();

// app.get("/rota", (req, res) => {
//     return res.json({
//         message: "Acessou a rota, show de boola !!"
//     })
// })

const products = [

/**
 * POST => Inserir um dado
 * GET => Buscar um/mais dados
 * PUT => Alterar um dado
 * DELETE => Remover um dado
 */


/** 
 * BODY => Sempre que eu quiser enviar dados para minha aplicação
 * Params => Parametros de rotas, fica na URL {EX: (/product/1)}
 * Query => Parametros não obrigatorios, passado na URL {EX: (/pruduct?id=13131&value=2121)}
*/

    app.post("/products", (req, res) => {
        //nome, preço e descrição


    })

];

app.listen(4002, () => console.log("Funciona"));