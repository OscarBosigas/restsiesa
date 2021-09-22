'use strict';

module.exports = function (app) {
    var todoList = require('../controllers/siesaController');

    app.route('/mascotas')
        .get(todoList.lista_mascotas);

};
