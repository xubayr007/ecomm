const router = require('express').Router()
var User = require('../models/user')

router.post('/signup', (req, res) => {
    var user = new User()
    user.profile.name = req.body.name
    user.password = req.body.password
    user.email = req.body.email

User.findOne({email:req.body.email},function(err,existingUser){

    
    if(existingUser){
        console.log("user already exists")
        return res.redirect('/signup')
    }else{

        user.save(function(err){
            if(err)
            return (err)
    
            res.send('Successfully created new user')
        })

    }


})

})

module.exports = router