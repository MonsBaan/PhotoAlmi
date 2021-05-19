var mongoose = require('mongoose');

//Setup Schema
var esquemaSerie = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    descripcion: String,
    valoraciones: [
        {
            _id: false,
            nick: String,
            puntuacion: Number,
            comentario: String
        }
    ],

    generos: Array,
    reproducciones: Number,
    premios: Array,
    temporadas: [
        {
            _id: false,
            nombreTemporada: String,
            capitulos: [
                {
                    _id: false,
                    numeroCapitulo: Number,
                    nombreCapitulo: String,
                    descripcionCapitulo: String,
                    duracionCapitulo: String
                }
            ]
        }

    ]

},
    {
        versionKey: false
    },
    {
        collection: 'contenidos'
    }
);



//Contact Model
var Serie = module.exports = mongoose.model('series', esquemaSerie);

module.exports.get = function (callback) {
    Serie.find({ 'tipo': 'Serie' }, callback);
};

module.exports.getTop = function (callback) {
    Serie.aggregate(
        [{ $unwind: "$valoraciones" },
        {
            $group: {
                "_id": "$_id",
                "titulo": { $first: "$titulo" },
                "puntuacionMedia": { $avg: "$valoraciones.puntuacion" }
            }
        }, { $match: { "tipo": "Serie" } },
        { $sort: { "puntuacionMedia": -1 } },
        { $limit: 10 }
        ], callback);
}
module.exports.getAllTop = function (callback) {
    Serie.aggregate(
        [{ $unwind: "$valoraciones" },
        {
            $group: {
                "_id": "$_id",
                "titulo": { $first: "$titulo" },
                "tipo": { $first: "$tipo" },
                "puntuacionMedia": { $avg: "$valoraciones.puntuacion" }
            }
        }, { $sort: { "puntuacionMedia": -1 } },
        { $limit: 10 }
        ], callback);
}

module.exports.findByGenero = function (callback, genero) {
    Serie.find({ 'generos': genero, "tipo": "Serie" }, callback);
}

module.exports.eliminarSerie = function (callback, id) {
    Serie.deleteOne({ '_id': id, "tipo": "Serie" }, callback);
}

module.exports.alta = function (callback, serie) {
    Serie.create(serie, callback);
}

module.exports.modificar = function (callback, id, serie) {
    Serie.updateOne({ '_id': id, "tipo": "Serie" }, serie, callback);
}
