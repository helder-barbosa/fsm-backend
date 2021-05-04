const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const indexRouter = require('./routes/index')
const clientsRouter = require('./routes/clients')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', indexRouter)
app.use('/clients', clientsRouter)

app.listen(port, () => console.log('Listen port ' + port))