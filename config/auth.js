module.exports = {
<<<<<<< HEAD
    ensureAuthenticated: function (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        req.flash('error_msg', 'Please login to view this resource');
        res.redirect('/users/login');
    }
=======
ensureAuthenticated : function(req,res,next) {
if(req.isAuthenticated()) {
return next();
}
req.flash('error_msg' , 'please login to view this resource');
res.redirect('/users/login');
}
>>>>>>> 4d22bf770092ee89ed6ffe5b4ed90b47299b6d13
}