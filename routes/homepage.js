const src = require('debug');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    
    // var username1 =req.session.user.username
    let products=[
        {
            title:"iphone 13",
            category:"Mobile",
            description:"This is a mobile by apple",
            image:"./images/apple-13.jpeg"
        },
        {
            title:"iphone 12",
            category:"Mobile",
            description:"This is a mobile by apple",
            image:"./images/apple-12.jpeg"
        },
        {
            title:"iphone 12 pro",
            category:"Mobile",
            description:"This is a mobile by apple",
            image:"./images/apple-12pro.jpeg"
        },
        {
            title:"iphone 12 promax",
            category:"Mobile",
            description:"This is a mobile by apple",
            image:"./images/apple-iphone-12-promax.jpeg"
        },
        {
            title:"iphone 13 pro",
            category:"Mobile",
            description:"This is a mobile by apple",
            image:"./images/iphone-13-pro-gold.jpeg"
        },
        {
            title:"iphone 12",
            category:"Mobile",
            description:"This is a mobile by apple",
            image:"./images/apple-12.jpeg"
        },
      
    ]
    let product=[
        {   name:'a52',
            price:'16,000',
            image:'./images/a52s.jpeg',
        },
        {   name:'a70',
            price:'18,000',
            image:'./images/a70s.jpeg',
        },{  
            name:'f12',
            price:'22,000',
            image:'./images/f12.jpeg',
        },
        {   name:'f22',
            price:'19,000',
            image:'./images/f22.jpeg',
        },
        {   name:'f42',
            price:'14,000',
            image:'./images/f42.jpeg',
        },
        {   name:'m11',
            price:'25,000',
            image:'./images/m11.jpeg',
        },
        {   name:'m12',
            price:'21,000',
            image:'./images/m12.jpeg',
        },
        {   name:'m21',
            price:'14,000',
            image:'./images/m21.jpeg',
        },
        {   name:'m31',
            price:'13,999',
            image:'./images/m31.jpeg',
        },
        {   name:'m32',
            price:'22,999',
            image:'./images/m32.jpeg',
        },
        
    
       ]
    
    if(req.session.user){
        
        var username = req.session.username
        var usernames = {usernamess: username}
        res.render('homepage',{usernames,products});

        router.get('/table',(req,res)=>{
            if(req.session.user){
             res.render('table',{product});
            }
            else{
                res.redirect('/signin')
            }
        })
        
    }
    else{
        res.redirect('/signin');
    }

    //for admin
    router.get('/admin',(req,res,next)=>{
        // req.send('hi')
        if(req.session.admin){
            res.render('adminpanel',{products,product});
        }
        else{
            res.redirect('/signin/admin')
        }
        // res.render('adminpanel');
    })
    
    
    
    
  
});



module.exports = router;
