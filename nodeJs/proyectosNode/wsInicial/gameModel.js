var mongoose = require('mongoose');

//Setup Schema
var gameSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    fecha_lanzamiento: {
        type: Date,
        default: Date.now
    },
    genero: Array,
    plataformas: Array,
    numventas: Number,
    comentarios: Array
},
    {
        collection: 'juegos'
    }

);

//Game Contact Model
var Game = module.exports = mongoose.model('game', gameSchema);

module.exports.get = function (callback, limit) {
    Game.find(callback).limit(limit);
};

module.exports.findByName = function (callback, name) {
    Game.findOne({ 'titulo': name }, callback);
};

module.exports.deleteByName = function (callback, name) {
    Game.deleteOne({ 'titulo': name }, callback);
}
