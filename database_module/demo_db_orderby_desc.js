var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Polwac9!9!",
    database:"mydb"
});

con.connect(function(err) {
    if (err) throw err;
    //Sort the result by name
    con.query("SELECT * FROM customers ORDER BY name DESC", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});