const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const app = express();

app.set('view engine','hbs');
app.use(express.static(__dirname +'/public'));
app.use((req,res,next) =>{
    var now  = new Date().toString();

    console.log(`${now}: ${req.method } ${req.url}`)
})


hbs.registerPartials( __dirname+'/views/partials')
hbs.registerHelper('getCurrentYear',() =>{
    return new Date().getFullYear();
});


app.get('/',function(req,res){
    res.render('home.hbs',{
        title:"Hims",
        last:"fdf"
    });
});

app.get('/about',function(req,res){
    res.render('about.hbs',{
        title:"About Page"
    });
});


app.listen(3000,function(){
    console.log('Server started on 3000');
});