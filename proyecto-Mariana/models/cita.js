const generateId = require("@codedipper/random-code")

module.exports=class Cita {

    constructor(cita){
        this.cId=generateId(6, ["R", "P", "D"])
        this.cName=cita.cName
        this.cLastName=cita.cLastName
        this.cPhone=cita.cPhone
        this.cEmail=cita.cEmail
        this.cDate=cita.cDate
        this.cTime=cita.cTime
    }
    validar(){
        let errores=[]
        if(this.cName=="")errores.push({error:"El nombre no puede estar vacio"})
        if(this.cLastName=="")errores.push({error:"El apellido no puede estar vacio"})
        //validacion del email:
        let regEmail= /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
        if(!regEmail.test(this.cEmail)) errores.push({error:"El formato de email es incorrecto"})
        //validar el telefono para saber que commienza por 6
        if(this.cPhone[0]!="6")errores.push({error:"El telefono tiene que empezar por 6"})
        return errores
    }
}
  
 