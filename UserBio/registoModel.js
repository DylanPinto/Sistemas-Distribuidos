var mongoose = require('mongoose');

//schema
var registoSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telef: {
        type: String,
        required: true
    },
    morada: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Export Registo Model
var Registo = module.exports = mongoose.model('registo', registoSchema);

module.exports.get = function (callback, limit) {
   Registo.find(callback).limit(limit); 
}