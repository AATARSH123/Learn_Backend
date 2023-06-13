var express= require('express')


var product = require('./product')

var user = require('./user')

var app=express()

app.use('/product',product)

app.use('/user',user)

app.get("*",(req,res)=>{
    res.send("Page not found")
})


app.listen(3000)

































//var app=express()


// var json={
//     name:'gokul',
//     id:1,
//     age:10
// }


// //get--->display
// //post--->create
// //put--->update
// //delete--->delete

// app.get('/',(req,res)=>{
//     res.send("get requet")
// })
// app.post('/post',(req,res)=>{
//     res.send("Post request")
// })

// app.put('/put',(req,res)=>{
//     res.send("Put request")
// })

// app.delete('/delete',(req,res)=>{
//     res.send("delete request")
// })

// app.listen(3000)