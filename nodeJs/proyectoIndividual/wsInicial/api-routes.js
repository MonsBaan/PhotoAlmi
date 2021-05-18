//Filename: api-routes.js

//Initialize express router
let router = require('express').Router();

//Set default API response
router.get('/', function (req, res) {
    console.log("API NetAlmix Funcional");
    res.json({
        status: "API NetAlmix Funcional",

    });

});

//Set import routes
var controlador = require('./controlador.js');

router.route('/all').get(controlador.index);//
router.route('/top').get(controlador.allTop);//
router.route('/top/:tipo').get(controlador.topType);//
router.route('/documentales/:nombre').get(controlador.avalado);

router.route('/:tipo').get(controlador.getAllType);//
router.route('/:tipo/:genero').get(controlador.getAllType);//
router.route('/alter/:tipo').post(controlador.insertar);//
router.route('/alter/:tipo/:id').delete(controlador.borrar).put(controlador.modificar);//
router.route('/documentales/:nombre').get(controlador.avalado);


//Export API routes
module.exports = router;