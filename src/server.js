import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    res.send('Got a POST request')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/users/:userId/books/:bookId', (req, res) => {
     let userId =req.params["uderId"]
    console.log("el usuario igreso es" + userId)
    res.send(req.params)
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