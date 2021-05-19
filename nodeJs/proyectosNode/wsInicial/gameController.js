
//Import gameModel

Game = require('./gameModel');
console.log(Game);
//Handle index actions
exports.index = function (req, res) {
    Game.get(function (err, games) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            });
        } else {
            res.json({
                status: "Success",
                message: "Games Retrieved",
                data: games
            });
        }
    });
};

//Handle create games action
exports.new = function (req, res) {
    var game = new Game();
    game.titulo = req.body.titulo;
    game.descripcion = req.body.descripcion;
    game.fecha_lanzamiento = req.body.fecha_lanzamiento;
    game.genero = req.body.genero;
    game.plataformas = req.body.plataformas;
    game.numventas = req.body.numventas;
    game.comentarios = req.body.comentarios;

    game.save(function (err) {
        res.json({
            message: 'New Game Created',
            data: game
        });
    });
};

//EJERCICIO 1
exports.one = function (req, res) {
    var name = req.params.name;

    Game.findByName(function (err, game) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            });
        } else {
            res.json({
                status: "Success",
                message: "Game Retrieved",
                data: game
            });
        }
    }, name);
};

exports.deleteOne = function (req, res) {
    var name = req.params.name;

    Game.deleteByName(function (err, game) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            });
        } else {
            res.json({
                status: "Success",
                message: "Game Retrieved",
                data: game.deletedCount + " deleted"
            });
        }

    }, name);
};

exports.updateOne = function (req, res) {
    var name = req.params.name;

    var game = new Game();
    game.titulo = req.body.titulo;
    game.descripcion = req.body.descripcion;
    game.fecha_lanzamiento = req.body.fecha_lanzamiento;
    game.genero = req.body.genero;
    game.plataformas = req.body.plataformas;
    game.numventas = req.body.numventas;
    game.comentarios = req.body.comentarios;


    game.save(function (err) {
        res.json({
            status: "Success",
            message: "Game Updated",
            data: game
        });
    });
}