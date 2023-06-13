var express=require('express')
var mongoose=require('mongoose')
var dburl=require("./props").DB_URL
var app=express()
mongoose.connect(dburl,{
    useNewUrlParser:true,
 
})
.then(()=>{
    console.log("Mongodb Connection")
})
.catch(()=>{
    console.log("error")
})
app.get('/',(req,res)=>{
    res.send("Hello")
})
app.listen(3001)