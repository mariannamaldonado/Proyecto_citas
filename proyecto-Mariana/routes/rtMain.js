const express = require('express')
const rtMain = express.Router()


rtMain.get('/', function (req, res){
res.render('home')
})



rtMain.get('/quienes-somos', function (req, res) {
    res.render('quienes-somos')
})


rtMain.get('/Contacto', function (req, res) {
    res.render('contacto')
})


            

            
module.exports = rtMain