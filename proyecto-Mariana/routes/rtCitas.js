//aqui todo lo que tsa relacionado con citas
const express = require ('express')
const rtCitas = express.Router()
const daoCitas = require ('../dao/daoCitas')
const Cita=require('../models/Cita')
const mailer = require('../modules/mailer')


rtCitas.get('/nueva',(req,res)=>{
    res.render('home')
})

rtCitas.post('/procesar', (req, res) => {
    let nuevaCita = new Cita(req.body)
    let errores = nuevaCita.validar()
    if (errores.length == 0) {
        daoCitas.guardar(nuevaCita)
            .then(cita => {
                if(cita==null)
                res.render('nueva', {error:'Dia y hora ocupada'})
                else{
                    mailer.send()
                res.render('respuesta', { cita: cita })
                }
               
            })
    } else {
        res.render('nueva', {
            errores: errores,
            cita: nuevaCita
        })
    }

})


rtCitas.post('/modificar', function (req, res) {
    res.render('modificar')
})

rtCitas.get('/cancelar', function (req, res) {
    res.render('cancelar')
})


// rtCitas.get('/consulta',(req,res)=>{
//     fs.readFile('citas.json','utf-8', (err,data)=>{
//         res.json(data)
//     })
// })
// rtCitas.get('/modificar/:id', (req,res)=>{
//     let id=req.params.id
//     res.send("Has seleccionado modificar la cita")
// })

module.exports=rtCitas