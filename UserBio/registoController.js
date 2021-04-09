//Import registoModel
Registo = require('./registoModel');

//Para index
exports.index = function (req, res) {
    Registo.get(function (err, registo) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "OK",
            message: "Registos Obtidos com Sucesso",
            data: registo       
        });
    });
};

//Criar novo Registo
exports.add = function (req, res) {
    var registo = new Registo();
    registo.nome = req.body.nome? req.body.nome: registo.nome;
    registo.email = req.body.email;
    registo.telef = req.body.telef;
    registo.morada = req.body.morada;

    //Guardar e verificar erros
    registo.save(function (err) {
        if (err)
            res.json(err);

        res.json({
            message: "Novo Registo Adicionado!",
            data: registo
        });
    });
};

// Ver Registo
exports.view = function (req, res) {
    Registo.findById(req.params.registo_id, function (err, registo) {
        if (err)
            res.send(err);
        res.json({
            message: 'Detalhes do Registo',
            data: registo
        });
    });
};

// Atualizar Registo
exports.update = function (req, res) {
    Registo.findById(req.params.registo_id, function (err, registo) {
        if (err)
            res.send(err);
        registo.nome = req.body.nome ? req.body.nome : registo.nome;
        registo.email = req.body.email;
        registo.telef = req.body.telef;
        registo.morada = req.body.morada;

        //Guardar e verificar erros
        registo.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Registo Updated Successfully",
                data: registo
            });
        });
    });
};

// Apagar Registo
exports.delete = function (req, res) {
    Registo.deleteOne({
        _id: req.params.registo_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "OK",
            message: 'Registo Eliminado!'
        });
    });
};