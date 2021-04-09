//Import covidModel
let Covid19 = require('./covidModel');

//Para index
exports.index = function (req, res) {
    Covid19.get(function (err, cov) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "OK",
            message: "Dados Obtidos com Sucesso",        
            data: cov      
        });
    });
};

//Para maximo
exports.maximo = function (req, res) {
    Covid19.get(function (err, cov) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
            var arrayconfirmados = []
            var arrayinternados = []
            for(var i in cov){
                arrayconfirmados.push(cov[i].confirmados_novos)
                arrayinternados.push(cov[i].internados_uci)
            }

        res.json({
            status: "OK",
            message: "Dados Obtidos com Sucesso",        
            maximo: Math.max.apply(null, arrayconfirmados),
            minimo: Math.min.apply(null, arrayconfirmados),
            //media: Object.values(arrayconfirmados).reduce((a, b) => a + b)/Object.values(arrayconfirmados).length
            media: Object.values(arrayconfirmados).reduce((a, b) => a + b)/7,
            total: Object.values(arrayconfirmados).reduce((a, b) => a + b),
            listanovos: arrayconfirmados,
            listainternados: arrayinternados  
        });
    });
};

//Criar novo Registo
/*exports.add = function (req, res) {
    var registo = new Covid19();
    registo.data =  req.body.data;
    registo.confirmados_novos = req.body.confirmados_novos;
    registo.internados_uci = req.body.internados_uci;
    registo.registo = req.body.registo;

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
*/