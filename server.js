const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const app = express();

const connectDB = require('./server/database/connection')

dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 3000

//Log Requests
app.use(morgan('tiny'))

// Mongo Conecction
connectDB()

// Parserequest to body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//Set view engine
app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, 'views/ejs'))

//Load assets 
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))

// Routes
app.use('/', require('./server/routes/router'))
app.listen(3000, () => { console.log(`Server running on http://localhost:${PORT}`) })