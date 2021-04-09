var mongoose = require('mongoose');

//schema
var covidSchema = mongoose.Schema({
    data: {
        type: String,
        required: true
    },
    confirmados_novos: {
        type: Number,
        required: true
    },
    internados_uci: {
        type: Number,
        required: true
    },
    registo: {
        type: Number,
        required: true
    }
});

// Export Registo Model
var Covid19 = module.exports = mongoose.model('covid293', covidSchema);

module.exports.get = function (callback, limit) {
   Covid19.find(callback).limit(limit); 
}