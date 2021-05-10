var mongoose = require('mongoose');

//Setup Schema
var esquema = mongoose.Schema({
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

    ],
    expertos: {
        nombre: String,
        apellido1: String,
        apellido2: String,
        cargo: String
    },
},
    {
        collection: 'contenido'
    },


);


//Contact Model
var Contenido = module.exports = mongoose.model('contenido', esquema);

module.exports.getAll = function (callback, tipo) {
    Contenido.find({}, callback);
};
module.exports.getAllType = function (callback, tipo) {
    switch (tipo) {
        case "peliculas":
            Contenido.find({ 'tipo': 'Pelicula' }, callback);
            break;
        case "series":
            Contenido.find({ 'tipo': 'Serie' }, callback);
            break;
        case "documentales":
            Contenido.find({ 'tipo': 'Documental' }, callback);
            break;
    }
};
module.exports.getGeneroType = function (callback, tipo, genero) {
    switch (tipo) {
        case "peliculas":
            Contenido.find({ 'tipo': 'Pelicula', 'generos': genero }, callback);
            break;
        case "series":
            Contenido.find({ 'tipo': 'Serie', 'generos': genero }, callback);
            break;
        case "documentales":
            Contenido.find({ 'tipo': 'Documental', 'generos': genero }, callback);
            break;

    }
};
module.exports.allTop = function (callback) {
    Contenido.aggregate(
        [{ $unwind: "$valoraciones" },
        {
            $group: {
                "_id": "$_id",
                "titulo": { $first: "$titulo" },
                "tipo": { $first: "$tipo" },
                "puntuacionMedia": { $avg: "$valoraciones.puntuacion" }
            }
        },
        { $sort: { "puntuacionMedia": -1 } },
        { $limit: 10 }
        ], callback);
};
module.exports.topType = function (callback, tipo) {
    switch (tipo) {
        case "peliculas":
            Contenido.aggregate(
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
            break;

        case "series":
            Contenido.aggregate(
                [{ $unwind: "$valoraciones" },
                {
                    $group: {
                        "_id": "$_id",
                        "titulo": { $first: "$titulo" },
                        "tipo": { $first: "$tipo" },
                        "puntuacionMedia": { $avg: "$valoraciones.puntuacion" }
                    }
                }, { $match: { "tipo": "Serie" } },
                { $sort: { "puntuacionMedia": -1 } },
                { $limit: 10 }
                ], callback);
            break;

        case "documentales":
            Contenido.aggregate(
                [{ $unwind: "$valoraciones" },
                {
                    $group: {
                        "_id": "$_id",
                        "titulo": { $first: "$titulo" },
                        "tipo": { $first: "$tipo" },
                        "puntuacionMedia": { $avg: "$valoraciones.puntuacion" }
                    }
                }, { $match: { "tipo": "Documental" } },
                { $sort: { "puntuacionMedia": -1 } },
                { $limit: 10 }
                ], callback);
            break;
    }
};
module.exports.insertar = function (callback, tipo, datos) {

    switch (tipo) {
        case "peliculas":
            Contenido.create(datos, callback);
            break;

        case "series":
            Contenido.create(datos, callback);
            break;

        case "documentales":
            Contenido.create(datos, callback);
            break;
    }
};
module.exports.borrar = function (callback, tipo, id) {

    switch (tipo) {
        case "peliculas":
            Contenido.deleteOne({ '_id': id, "tipo": "Pelicula" }, callback);
            break;
        case "series":
            Contenido.deleteOne({ '_id': id, "tipo": "Serie" }, callback);
            break;
        case "documentales":
            Contenido.deleteOne({ '_id': id, "tipo": "Documental" }, callback);
            break;
    }
};
module.exports.modificar = function (callback, tipo, id, datos) {
    switch (tipo) {
        case "peliculas":
            Contenido.updateOne({ '_id': id, "tipo": "Pelicula" }, datos, callback);
            break;
        case "series":
            Contenido.updateOne({ '_id': id, "tipo": "Serie" }, datos, callback);
            break;
        case "documentales":
            Contenido.updateOne({ '_id': id, "tipo": "Documental" }, datos, callback);
            break;
        default:
            break;
    }
}
module.exports.avalado = function (callback, nombre) {
    Contenido.find({ "expertos.nombre": nombre , "tipo":"Documental"}, {"titulo": 1, "expertos": 1}, callback);
}
/*
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
}*/