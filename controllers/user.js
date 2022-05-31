const User = require('../models/user');

// render the sign up page
module.exports.signUp = function(req, res){
    if(req.cookies.user_id){
        res.redirect("/");
    }

    return res.render('sign_up');
}


// render the sign in page
module.exports.signIn = function(req, res){
    if(req.cookies.user_id){
        res.redirect("/");
    }

    return res.render('sign_in');
}

// get the sign up data
module.exports.createUser = function(req, res){
    
    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            console.log('error in finding user in signing up'); 
            return
        }

        if (!user){
            User.create(req.body, function(err, user){
                if(err){
                    console.log('error in creating user while signing up'); 
                    return
                }

                // handle session creation
                res.cookie('user_id', user.id);
                return res.redirect('/');
            })
        }else{
            return res.redirect('back');
        }

    });
}


// sign in and create a session for the user
module.exports.createSession = function(req, res){

    // steps to authenticate
    // find the user
    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing in'); return}
        // handle user found
        if (user){

            // handle password which doesn't match
            if (user.password != req.body.password){
                return res.redirect('back');
            }

            // handle session creation
            res.cookie('user_id', user.id);
            return res.redirect('/');

        }else{
            // handle user not found
            return res.redirect('back');
        }

    });
    
}

module.exports.destroySession=function(req,res){
    res.clearCookie("user_id");
    res.redirect("/users/sign-in");
}