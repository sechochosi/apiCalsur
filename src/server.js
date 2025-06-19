import express from 'express'

const app = express()
const port = 3000

app.use(express.json)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/agricultores', async (req, res) => {
    const result = await crearAgricultor(req.body);
    return res.send(result)
})


function validate(id){

}

app.get('/users/:userId/books/:bookId', (req, res) => {
    let userId = req.params["userId"]
    if(/^\d+$/.test(userId)){
        console.log("Si es un numero")
        console.log("el usuario ingresado es: " + userId)
    }else{
    console.log("No es un numero")
    }
    res.send(req.params)
})