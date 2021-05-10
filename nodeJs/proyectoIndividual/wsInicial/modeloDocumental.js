var mongoose = require('mongoose');

//Setup Schema
var esquemaDocumental = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    descripcion: String,
    valoraciones: [{
        _id: false,
        nick: String,
        puntuacion: Number,
        comentario: String
    }],

    generos: Array,
    reproducciones: Number,
    premios: Array,
    duracion: Number,
    director: String,
    expertos: {
        nombre: String,
        apellido1: String,
        apellido2: String,
        cargo: String
    }
},
    {
        versionKey: false
    },
    {
        collection: 'contenidos'
    }

);

//Contact Model
var Documental = module.exports = mongoose.model('contenidos', esquemaDocumental);

module.exports.get = function (callback) {
    Documental.find({ 'tipo': 'Documental' }, callback);
};

module.exports.alta = function (callback, documental) {
    Documental.create(documental, callback);
}

module.exports.eliminar = function (callback, id) {
    Documental.deleteOne({ '_id': id, "tipo": "Documental" }, callback);
}

module.exports.modificar = function (callback, id, documental) {
    Documental.updateOne({ '_id': id, "tipo": "Documental" }, documental, callback);
}

module.exports.avaladoBy = function (callback, id) {

    Documental.find({ "expertos.nombre": "Arnold" }, {"titulo": 1, "expertos": 1}, callback);
}
