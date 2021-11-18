const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const itemRoutes = require('./routes/item.routes')
const authRoutes = require('./routes/auth.routes')
const app = express()
require('dotenv').config()

//configuraciones
app.set('port', process.env.PORT || 3000)
app.use(morgan('dev'))
mongoose.connect(process.env.DB_URL)
.then(db => console.log('Mongo Connected'))
.catch(err => console.log(err))
app.use(express.urlencoded({
    extended: false
}))

//rutas
app.use('/items', itemRoutes)
app.use('/auth', authRoutes)

app.get('/', (req, res)=>{
    res.send('Estas en la raiz de la app')
})

app.post('/', (req, res)=>{
    res.send('Hola Tripulantes!')
})

//inicio de servidor
app.listen(app.get('port'), ()=>{
    console.log('Server Running')
})