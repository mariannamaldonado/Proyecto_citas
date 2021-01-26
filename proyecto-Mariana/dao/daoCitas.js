const Cita = require('../models/Cita')
const fs=require('fs')

const daoCitas={}


daoCitas.guardar = function guardar(cita) {
    return new Promise((resolved, reject) => {
        let citas = []
        fs.readFile('./dao/citas.json', (err, data) => {
            if (err) reject(err)
            if (data != "") citas = JSON.parse(data)
            if(citas.find(c=>c.cDate==cita.cDate && c.dTime==cita.cTime))
            resolved(null)
            else{
                //libre
                citas.push(cita)
                fs.writeFile('./dao/citas.json', JSON.stringify(citas), (err) => {
                if (err) reject(err)
                resolved(cita)
                })
            }
        })
    })
}
// daoCitas.getCitas=function getCitas (){
//     return new Promise((resolved,reject)=>{
//         setTimeout(()=>{
//             resolved(citas)
//             reject("error")
//         },2000) 
//     })
// }
// daoCitas.getCitasByName=function getCitasByName (nombre){
//     return new Promise((resolved,reject)=>{
//         setTimeout(()=>{
//             resolved(citas.filter(cita=>`${cita.nombre} ${cita.apellidos}`==nombre))
//             reject("error")
//         },2000) 
//     })
// }
// daoCitas.editCita=function editCita(cita){
//     let citaACambiar=this.getCita(cita.id)
//     citaACambiar.fecha=cita.fecha
//     citaACambiar.hora=cita.hora
//     return new Promise((resolved,reject)=>{
//         setTimeout(()=>{  
//             citas.splice(citas.indexOf(cita), 1, citaACambiar)
//         },1000)
//     })
    
// }
module.exports=daoCitas
