var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Polwac9!9!"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
