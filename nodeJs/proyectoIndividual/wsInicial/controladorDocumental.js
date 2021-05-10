//Import Model
var Contenido = require('./modeloDocumental');

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

exports.insertar = function (req, res) {
    var documental = req.body

    Contenido.alta(function (err, cont) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            });
        } else {
            res.json({
                status: "Success",
                message: "Contenido Insertado",
                data: cont
            });
        }
    }, documental);
}

exports.eliminar = function (req, res) {
    var id = req.params.id;

    Contenido.eliminar(function (err, cont) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            });
        } else {
            res.json({
                status: "Success",
                message: "Contenido Eliminado",
                data: cont
            });
        }
    }, id);
}

exports.update = function (req, res) {
    var id = req.params.id;
    var documental = req.body;

    Contenido.modificar(function (err, cont) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            });
        } else {
            res.json({
                status: "Success",
                message: "Contenido Modificado",
                data: cont
            });
        }
    }, id, documental);
}

exports.avalado = function(req, res){
    var nombreAval = req.params.nombre;

    Contenido.avaladoBy(function (err, cont){
        
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
    }, nombreAval);
}
