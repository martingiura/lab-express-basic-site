// 1. IMPORTACIONES
const express 		= require("express")
const app			= express()

require("dotenv").config()

// 2. MIDDLEWARES
app.use(express.static('public'))

app.set("views", __dirname + "/views")
app.set("view engine", "hbs")


// 3. RUTAS
app.get("/", (req, res) => {

res.sendFile(__dirname + '/views/index.html')

})
app.get("/about", (req,res) => {
    res.sendFile(__dirname + '/views/about.html')
})

app.get("/works", (req,res) => {
    res.sendFile(__dirname + '/views/works.html')
})

app.get("/photo-gallery", (req,res) => {
    res.sendFile(__dirname + '/views/photo-gallery.html')
})
// 4. SERVIDOR
app.listen(process.env.PORT, () => {
	console.log(`Servidor activo en puerto ${process.env.PORT}`)
})
