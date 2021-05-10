//Import Model
var ContenidoSeries = require('./modeloSerie');

//Handle index actions
exports.index = function (req, res) {
    ContenidoSeries.get(function (err, cont) {
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

    ContenidoSeries.findByGenero(function (err, serie) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            });
        } else {
            res.json({
                status: "Success",
                message: genero,
                data: serie
            });
        }
    }, genero);
};

exports.insertar = function (req, res) {
    var serie = req.body

    ContenidoSeries.alta(function (err, serie) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            });
        } else {
            res.json({
                status: "Success",
                data: serie,
            });
        }
    }, serie);


};

exports.eliminar = function (req, res) {
    var idSerie = req.params.id
    ContenidoSeries.eliminarSerie(function (err, serie) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            });
        } else {
            res.json({
                status: "Success",
                message: idSerie,
                data: serie.deletedCount + " deleted"
            });
        }
    }, idSerie);
};

exports.update = function (req, res) {
    var serie = req.body;
    var id = req.params.id;
    ContenidoSeries.modificar(function (err, serie) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            });
        } else {
            res.json({
                status: "Success",
                data: serie,
            });
        }
    }, id, serie);


};

exports.topSeries = function (req, res) {
    ContenidoSeries.getTop(function (err, cont) {
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

exports.top = function (req, res) {
    ContenidoSeries.getAllTop(function (err, cont) {
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