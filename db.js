'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host: "j8oay8teq9xaycnm.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    database: "r2hquwaduy2cl2a0",
    user: "gsxzldbm5psuer1s",
    password: "jmphea53wamibt1n"
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;