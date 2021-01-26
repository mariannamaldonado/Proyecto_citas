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
    
}
      