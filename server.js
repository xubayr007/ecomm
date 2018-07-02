const express = require('express')
const app = express()
const router = express.Router()
const morgan = require('morgan')
var mongoose = require('mongoose')
var User = require('./models/user')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://root:testing123@ds125341.mlab.com:25341/ecommerce', function (err) {

    if (err)
        console.log(err)
    else
        console.log('connected')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan('dev'))

app.post('/user', (req, res,next) => {
    var user = new User()
    user.profile.name = req.body.name
    user.password = req.body.password
    user.email = req.body.email

    user.save(function(err){
        if(err)
        next(err)

        res.send('Successfully created new user')
    })

})


app.listen(3000, () => {
    console.log('server listening on port 3000')
})



