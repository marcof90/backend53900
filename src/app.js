const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const itemRoutes = require('./routes/item.routes')
const authRoutes = require('./routes/auth.routes')
const incomeRoutes = require('./routes/income.routes')
const outcomeRoutes = require('./routes/outcome.routes')
const app = express()
const path = require('path')
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
app.use('/documentation', express.static(path.join(__dirname, '../doc/')))

//rutas
app.use('/items', itemRoutes)
app.use('/auth', authRoutes)
app.use('/incomes', incomeRoutes)
app.use('/outcomes', outcomeRoutes)

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