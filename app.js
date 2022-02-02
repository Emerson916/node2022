const express = require("express")

const app = express();

app.get("/rota", (req, res) => {
    return res.json({
        message: "Acessou a rota, show de boola !!"
    })
})

app.listen(4002, () => console.log("Funciona"));