var express = require('express')

var router = express.Router()

router.get('/get',(req,res)=>{
    res.send("user get")
})

router.post('/post',(req,res)=>{
    res.send("user post")
})

router.put('/put',(req,res)=>{
    res.send("user put")
})

router.delete('/delete',(req,res)=>{
    res.send("user delete")
})

module.exports = router