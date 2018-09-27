const router = require('express').Router()
var User = require('../models/user')



router.get('/signup',function(req,res,next){

    res.render('accounts/signup',{
        errors:req.flash('errors')
    })



})

router.post('/signup', (req, res) => {
    var user = new User()
    user.profile.name = req.body.name
    user.password = req.body.password
    user.email = req.body.email

User.findOne({email:req.body.email},function(err,existingUser){

    
    if(existingUser){
        req.flash('errors','user with this email already exists')
        return res.redirect('/signup')
    }else{

        user.save(function(err){
            if(err)
            return (err)
            
            return res.redirect('/')
        })

    }


})

})

module.exports = router