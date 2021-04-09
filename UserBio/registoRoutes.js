//initialize express router
let router = require('express').Router();

//set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API'
    });
});

//Import Registo Controller
var registoController = require('./registoController');

// Registo routes
router.route('/registo')
    .get(registoController.index)
    .post(registoController.add);

router.route('/registo/:registo_id')
    .get(registoController.view)
    .patch(registoController.update)
    .put(registoController.update)
    .delete(registoController.delete);

//Export API routes
module.exports = router;