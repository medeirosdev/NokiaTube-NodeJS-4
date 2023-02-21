const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars');
const path = require('path');


//Handlebars------------------------------------------------------------------
app.set('view engine' , 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars' , handlebars.engine({
    extname:'handlebars' ,
    defaultLayout : 'main' ,
    layoutsDir:  path.join(__dirname + '/views/layouts'), 
}))
//Receber Respostas do Body
app.use(express.urlencoded({ extended:true })
)
app.use(express.json())
// Config a pasta Public
app.use(express.static(__dirname + '/public'));
//-------------------Rotas importadas----------------------------------------
const UserRoutes = require('./routes/userRoutes')
//-------------------Rotas Usadas-------------------------------------------
app.use('/' , UserRoutes);

//---------------------------------------------------------------------------
try{
    app.listen(3000);
    console.log("Servidor rodando na porta 3000")
}catch(err){
    console.log(err)
}