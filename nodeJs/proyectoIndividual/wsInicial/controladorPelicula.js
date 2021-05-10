//Import Model
var Contenido = require('./modeloPelicula');

//Handle index actions
exports.index = function (req, res) {
    Contenido.get(function (err, cont) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            });
        } else {
            res.json({
                status: "Success",
                message: "Contenido Recibido",
                data: cont
            });
        }
    });
};

//Handle Create Actions

exports.buscarGenero = function (req, res) {
    var genero = req.params.genero;

    Contenido.findByGenero(function (err, pelicula) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            });
        } else {
            res.json({
                status: "Success",
                message: genero,
                data: pelicula
            });
        }
    }, genero);
};

exports.topPeliculas = function (req, res) {
    Contenido.getTop(function (err, cont) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            });
        } else {
            res.json({
                status: "Success",
                message: "Contenido Recibido",
                data: cont
            });
        }
    });
};

exports.insertar = function (req, res) {
    var pelicula = req.body

    Contenido.alta(function (err, pelicula) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            });
        } else {
            res.json({
                status: "Success",
                data: pelicula,
            });
        }
    }, pelicula);


};

exports.eliminar = function (req, res) {
    var idPelicula = req.params.id
    Contenido.eliminarPelicula(function (err, pelicula) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            });
        } else {
            res.json({
                status: "Success",
                message: idPelicula,
                data: pelicula.deletedCount + " deleted"
            });
        }
    }, idPelicula);
};

exports.update = function (req, res) {
    var pelicula = req.body;
    var id = req.params.id;
    Contenido.modificar(function (err, pelicula) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            });
        } else {
            res.json({
                status: "Success",
                data: pelicula,
            });
        }
    }, id, pelicula);


};