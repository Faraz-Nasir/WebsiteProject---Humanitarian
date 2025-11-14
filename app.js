const express=require('express');
const path=require('path')

const app=express();
const PORT=process.env.PORT || 5600;

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')))
app.get('/',(req,res)=>{
    res.render('HomePage',{title:'Home Page'});
});
app.get('/about',(req,res)=>{
    res.render('AboutMe',{title:'About Me'});
});
app.get('/vision',(req,res)=>{
    res.render('Vision',{title:'My Vision'});
});

app.listen(PORT,()=>{
    console.log("Server is listening on port: "+PORT);
})