const express = require('express')
const app = express()
const router = express.Router()
const morgan = require('morgan')
const ejsmate = require('ejs-mate')
const ejs = require('ejs')
var mongoose = require('mongoose')
var User = require('./models/user')
const bodyParser = require('body-parser')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('express-flash')



mongoose.connect('mongodb://localhost:27017/ecommerce', function (err) {

    if (err)
        console.log(err)
    else
        console.log('connected')
})



// Middleware
app.use(express.static(__dirname+'/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan('dev'))
app.engine('ejs',ejsmate)
app.set('view engine','ejs')
app.use(cookieParser())
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'ecommerce123'
}))

app.use(flash())




//Routes
app.use('/',require('./routes/user'))
app.use('/',require('./routes/main'))

app.listen(3000,(err) => {
    if(err)
    throw err
    console.log('server listening on port 3000')
})



