var mongoose = require('mongoose');

//Setup Schema

var esquemaPeliculas = mongoose.Schema({
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
    director: String
},
    {
        versionKey: false
    },
    {
        collection: 'contenidos'
    }

);


//Contact Model
var Pelicula = module.exports = mongoose.model('peliculas', esquemaPeliculas);

module.exports.get = function (callback, limit) {
    Pelicula.find({ 'tipo': 'Pelicula' }, callback).limit(limit);
};

module.exports.getTop = function (callback) {
    Pelicula.aggregate(
        [{ $unwind: "$valoraciones" },
        {
            $group: {
                "_id": "$_id",
                "titulo": { $first: "$titulo" },
                "tipo": { $first: "$tipo" },
                "puntuacionMedia": { $avg: "$valoraciones.puntuacion" }
            }
        }, { $match: { "tipo": "Pelicula" } },
        { $sort: { "puntuacionMedia": -1 } },
        { $limit: 10 }
        ], callback);
}

module.exports.findByGenero = function (callback, genero) {
    Pelicula.find({ 'generos': genero, "tipo": "Pelicula" }, callback);
}

module.exports.eliminarPelicula = function (callback, id) {
    Pelicula.deleteOne({ '_id': id, "tipo": "Pelicula" }, callback);
}

module.exports.alta = function (callback, pelicula) {
    Pelicula.create(pelicula, callback);
}

module.exports.modificar = function (callback, id, pelicula) {
    Pelicula.updateOne({ '_id': id, "tipo": "Pelicula" }, pelicula, callback);
}