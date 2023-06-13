var express = require('express')

var router = express.Router()

router.get('/get/:id([0-9]{4})', (req, res) => {
    res.send("Product get " + req.params.id)
})

router.post('/post/:id/:name([a-z]{4})', (req, res) => {
    res.send("Product post " + req.params.id + " " + req.params.name)
})

router.put('/put', (req, res) => {
    res.send("Product put")
})

router.delete('/delete', (req, res) => {
    res.send("Product delete")
})

module.exports = router
