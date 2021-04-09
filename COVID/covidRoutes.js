//initialize express router
let router = require('express').Router();

//set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to COVID API'
    });
});

//Import Covid Controller
var covidController = require('./covidController');

// Covid routes
router.route('/covid')
    .get(covidController.index)
    //.post(covidController.add);
router.route('/totalcovid')
    .get(covidController.maximo)

/*router.route('/covid/:registo_id')
    .get(registoController.view)
    .patch(registoController.update)
    .put(registoController.update)
    .delete(registoController.delete);
*/

//Export API routes
module.exports = router;