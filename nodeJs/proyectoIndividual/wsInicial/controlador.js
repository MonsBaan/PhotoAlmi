//Import Model
var Contenido = require('./modelo');

//Handle index actions
exports.index = function (req, res) {
    Contenido.getAll(function (err, contenido) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            });
        } else {
            res.json({
                status: "Success",
                message: "Contenido Recibido",
                data: contenido
            });
        }
    });
};
exports.getAllType = function (req, res) {
    var tipo = req.params.tipo;
    Contenido.getAllType(function (err, contenido) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            });
        } else {
            res.json({
                status: "Success",
                message: "Contenido Recibido",
                data: contenido
            });
        }
    }, tipo);
};
exports.getGeneroType = function (req, res) {
    var tipo = req.params.tipo;
    var genero = req.params.genero;

    Contenido.getGeneroType(function (err, contenido) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            });
        } else {
            res.json({
                status: "Success",
                message: "Contenido Recibido",
                data: contenido
            });
        }
    }, tipo, genero);
};
exports.allTop = function (req, res) {
    Contenido.allTop(function (err, contenido) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            });
        } else {
            res.json({
                status: "Success",
                message: "Contenido Recibido",
                data: contenido
            });
        }
    });
};
exports.topType = function (req, res) {
    var tipo = req.params.tipo;
    
    Contenido.topType(function (err, contenido) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            });
        } else {
            res.json({
                status: "Success",
                message: "Contenido Recibido",
                data: contenido
            });
        }
    }, tipo);
};
exports.insertar = function (req, res) {
    var tipo = req.params.tipo;
    var datos = req.body;

    Contenido.insertar(function (err, contenido) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            });
        } else {
            res.json({
                status: "Success",
                data: contenido
            });
        }
    }, tipo, datos);
};
exports.borrar = function (req, res) {
    var tipo = req.params.tipo;
    var id = req.params.id;
    
    Contenido.borrar(function (err, contenido) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            });
        } else {
            res.json({
                status: "Success",
                data: contenido
            });
        }
    }, tipo, id);
};

exports.modificar = function (req, res) {
    var tipo = req.params.tipo;
    var id = req.params.id;
    var datos = req.body;
    
    Contenido.modificar(function (err, contenido) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            });
        } else {
            res.json({
                status: "Success",
                data: contenido
            });
        }
    }, tipo, id, datos);
};

exports.avalado = function (req, res) {
    var nombre = req.params.nombre;
    

    Contenido.avalado(function (err, contenido) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            });
        } else {
            res.json({
                status: "Success",
                data: contenido
            });
        }
    }, nombre);
};