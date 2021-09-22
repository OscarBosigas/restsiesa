'use strict';

var Siesa = require('../models/siesa');


exports.lista_mascotas = function (req, res) {
    Estudiante.estudiantes(function (err, siesa) {
        if (err)
            res.send(err);
        res.send(siesa);
    });
};
