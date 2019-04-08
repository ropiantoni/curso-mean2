'use strict'

//la logica de express, vamos a llamar a sus metodos, vamos a llamar a ficheros de ruta etc para tener el servidor arrancado
var express = require ('express'); //cargamos la libreria
var bodyParser = require('body-parser'); 

var app = express();

//cargar rutas (los ficheros de routes)
var user_routes = require('./routes/user');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); //convierte jsons en http para desp poder trabajar con ellos

//configurar cabeceras http

//rutas base c ruta va a tener un api delante
//middleware q siempre va antes de las rutas
app.use('/api', user_routes);

module.exports = app;