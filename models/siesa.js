'user strict';

var sql = require('../db');

var Siesa = function (siesa) {
    this.id_mascota = siesa.id_mascota;
    this.nombre_mascota = siesa.nombre_mascota;
    this.id_propietario = siesa.id_propietario;
    this.id_tipo_mascota = siesa.id_tipo_mascota;
};


Siesa.lista_mascotas = function lista_mascotas(result) {
    sql.query("SELECT * FROM `MASCOTA`", (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    })
};


module.exports = Siesa;