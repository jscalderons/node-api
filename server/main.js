const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.get('/', function(request, response) {
    response.send('Hola Mundo!')
})

app.post('/usuario', function (request, response) {
    const data = request.body || {}

    if (data.nombre === undefined) {
        response.status(400).json({
            ok: false,
            message: 'The field "Nombre" is required.'
        })
    } else {
        response.json(data)
    }

})

app.listen(process.env.PORT, () => { console.log('Escuchando el puerto: ', process.env.PORT) })
