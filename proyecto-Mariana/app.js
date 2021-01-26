const express = require('express')
const app = express()
const fileUpload = require('express-fileupload')
const rtCitas = require('./routes/rtCitas')
const rtMain = require('./routes/rtMain')
var exphbs  = require('express-handlebars')


app.engine('.hbs', exphbs({
    extname: '.hbs'
}))
app.set('view engine', '.hbs')


app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended:true}))
app.use(fileUpload())
app.use(express.json())

//enrutador principal
app.use('/',rtMain)
app.use('/citas', rtCitas)


app.listen(5000,(err)=>{
    console.log('Server run on port 5000')
})


 