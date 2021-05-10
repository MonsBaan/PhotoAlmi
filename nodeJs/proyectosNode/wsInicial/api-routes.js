//Filename: api-routes.js

//Initialize express router
let router = require('express').Router();

//Set default API response
router.get('/', function (req, res) {
    res.json({
        status: "API is WORKING",
        message: "Bienvenido al mejor ueb serbis del mundo"
    });

});

//Set import routes
var gameController = require('./gameController');
router.route('/games').get(gameController.index).post(gameController.new);

router.route('/games/one/:name').get(gameController.one).delete(gameController.deleteOne).put(gameController.updateOne);

//Export API routes
module.exports = router;