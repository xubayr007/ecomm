const express = require('express')
const router = express.Router()





//Routes


router.get('/',function(req,res){
    res.render('main/home')
})

router.get('/about',function(req,res){
    res.render('main/about')
})

module.exports = router




