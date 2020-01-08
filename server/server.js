require('./config/config.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/usuario', function (req, res) {
    res.json('get usuario');

});
app.post('/usuario', function (req, res) {

    let body= req.body;
    res.json({
        persona:body
    });
    if (body.nombre=== undefined){
        res.status(400).json({
            ok:false,
            mensaje:"el nombre es necesario"
        });
    }

});
app.put('/usuario', function (req, res) {
    res.json('put usuario');

});
app.delete('/usuario', function (req, res) {
    res.json('delete usuario');

});

app.listen(process.env.PORT,()=>{
    console.log("escuchando en el puerto ",process.env.PORT)
});