const express = require("express");
//me da um numero aleatorio
const { randomUUID } = require("crypto");


const app = express();
app.use(express.json());

// app.get("/rota", (req, res) => {
//     return res.json({
//         message: "Acessou a rota, show de boola !!"
//     })
// })

const products = [];

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

//Cria um produto
app.post("/products", (req, res) => {
    //nome, preço e descrição

    const { name, price, description } = req.body;

    const product = {
        id: randomUUID(),
        name,
        price,
        description
    }

    products.push(product);

    return res.json(product);

    console.log(body)
});


//Lista todos
app.get("/products", (req, res) => {
    return res.json(products)
})

//Listagem por id
app.get("/products/:id", (req, res) => {
    const { id } = req.params;
    const product = products.find((product) => product.id === id);
    return res.json(product)
})

//Editando um produto

app.put("/products/:id", (req, res) => {
    const { id } = req.params;
    const { name, price, description } = req.body;

    //procuando a posição do produto pelo id
    const productIndex = products.findIndex(product => product.id === id)
    products[productIndex] = {
        id: products[productIndex].id,
        name,
        price,
        description
    }

    return res.json({
        products,
        
        message: "Produto alterado com sucesso!!"
    })
});


// Deletando um produto

app.delete("/products/:id", (req, res) => {
    const { id } = req.params;
    const productIndex = products.findIndex(product => product.id === id);

    //slice - remove "N" posições do produto encontrado
    products.splice(productIndex, 1)

    return res.json({
        message: "Produto removido com sucesso"
    })

})

app.listen(4002, () => console.log("Funciona"));