const Mascotas = require('./services/mascotas.service')
const express       = require('express')
const bodyParser    = require('body-parser')
const app     = express()
const port    = 3005
app.use(bodyParser.json())


app.get('/mascotas', async (req, res) => {

    const response = await Mascotas.todos()
    res.send(response)
})

app.get('/mascotas/:id',  async (req, res) => {
    
    const id = await parseInt(req.params.id) 
    const todos = await Mascotas.todos()
    const mascotas = await Mascotas.mostrarMascotaPorId(todos)
    
    mascotas.map((mascota)=> {
        if(mascota.ID === id) {
            res.send({
                mascota
             })
        }
    })
})

app.post('/mascotas', async (req, res) => {
    const nuevaMascota = await req.body
    const respuesta = await Mascotas.agregarMascota(nuevaMascota)
    const response = await Mascotas.todos()
    res.send({
        resultado: response
    })
})


app.put('/mascotas', async (req, res) => {
    const mascota =  req.body
    const respuesta = await Mascotas.editar(mascota)
    const response = await Mascotas.todos()
    res.send({
        resultado: response
    })
})


app.listen(port, (req, res) => {
    console.log("server running :: ", port)
})