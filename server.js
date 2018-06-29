const express = require('express')
const app = express()
const router = express.Router()
const morgan = require('morgan')



app.use(morgan('dev'))

app.get('/home',(req, res)=>{

res.send('hi i am hollowen')

})


app.listen(3000,()=>{
    console.log('server listening on port 3000')
})



