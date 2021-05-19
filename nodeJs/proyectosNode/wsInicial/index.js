//FileName: index.js

//Import Body Parser
let bodyParser = require('body-parser');

//Import Mongoose
let mongoose = require('mongoose');

// Import express
let express = require('express');

//Inicializar la aplicacion web
let app = express();

//Configure Bodyparser to handle post request
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//Connect mongoose and set connection variable
mongoose.connect('mongodb://Almi:Almi123@localhost/juegAlmi?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

if (!db) {
    console.log("Error en la Conexion a la Base de Datos")
} else (
    console.log("Base de datos conectada")
)

//Configurar puertos del servidor
var port = process.env.PORT || 8080;

//Enviar mensaje por defecto
app.get('/', (req, res) => res.send('Hola doña'));

//Lanzar la app para escuchar el puerto
app.listen(port, function () {
    console.log("Running on port " + port);

});

//Import Routes
let apiRoutes = require("./api-routes");
const router = require('./api-routes');

//Use API Routes in App
app.use('/api', apiRoutes);