const express = require ('express');
//iniciando la app
const app = express ();

//app.get('/home', function (req, res){ //abre la pagina home
//    res.send("Hola mundo");
//})

//para enviar datos

app.get('/home/:id', function (req, res){
     const id = req.params.id
     res.send(id);
})


//enviar datos por parametros Query

app.get('/home', function (req, res){
    const id = req.query.id
    const limit = req.query.limit   
    res.json({
        id,
        limit
    });
})


// app.get('/nosotros', function (req, res){ //abre otra ruta en otra pestaña
//     res.send("Aqui esta nosotros");
// })



    // escuchando en el puerto
app.listen (3000, function(){
    console.log("escuchando en el puerto 3000");
});