var express=require("express");
var router= express.Router();

router.get('/',(req,res,next)=>{
    if(req.session.user||req.session.admin){
        if(req.session.user){
            res.redirect('/')
        }
        else if(req.session.admin){
            res.redirect('/signin/admin')
        }  
    }
    else{
   
    res.render('signin',{errmsg:req.session.errmsg})
    req.session.errmsg=null;
 
    }
    
}),

router.get('/admin',(req,res)=>{
    if(req.session.admin){
        res.redirect('/admin')
    }
    else{
        res.render('adminLogin');
    }
    
})

function validateLogin(formdata){

    var username= formdata.username;
    var password = formdata.password;
    var response={};

    var user = {username:'amogh',password:'1234'}
    
    if(username==user.username && password==user.password){
        response.user = user;
        response.status = true;
    }
    else{
        response.user = null;
        response.status = false;
    }
    return response;

}

router.post('/form',(req,res,next)=>{
    console.log(req.body);
    var response = validateLogin(req.body);
    console.log(response);
    if(response.status){
        req.session.user = response.user;
        req.session.username = response.user.username
        req.session.isloggedin= true;
        console.log('im in /form')
        res.redirect('/')
    }
    else{
        req.session.user = null;
        req.session.isloggedin = false;
        req.session.errmsg = "Enter the valid Username or Password";
        res.redirect('/signin');
    }
})

router.get('/logout',(req,res)=>{
    req.session.user=null;
    req.session.isloggedin=false;
    res.redirect('/signin');
})

router.get('/adminlogout',(req,res)=>{
    req.session.admin=null;
    req.session.isadminloggedin=false;
    res.redirect('/signin/admin');
})

function validateAdminlogin(formData){
    var adminName = formData.adminname;
    var password = formData.password;

    var response = {};

    var admin = {adminName:'amogh',password:'12345'};

    if(adminName==admin.adminName&&password==admin.password){
        response.admin=admin;
        response.status=true;
    }
    else{
        response.admin=null;
        response.status=false;
    }
    return response;
}
router.post('/adminform',(req,res,next)=>{
    var adminResponse = validateAdminlogin(req.body)

    if(adminResponse){
        req.session.admin=adminResponse.admin
        req.session.isadminloggedin=true;
        res.redirect('/admin')
    }
    else{
        req.session.admin=null;
        req.session.isadminloggedin=false;
        // req.session.errmesg = "Enter the valid Admin name or Password";
        res.redirect('/signin/admin');
    }

})
// router.get('/admin',(req,res)=>{
//     if(req.session.admin){
//         res.redirect('/admin')
//     }
//     else{

//         console.log("gfhdjfjg"+req.session.errmesg);

//         res.render('adminLogin',{errormsg:req.session.errmesg});
//         req.session.errmesg = null;
//     }
    
// })

module.exports=router;