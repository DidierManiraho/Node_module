var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Polwac9!9!",
    database:"mydb"
});

var name = 'Amy';
var adr = 'Mountain 21';

var sql = 'SELECT * FROM customers WHERE address = ? OR address = ?';
con.query(sql,[name,adr],function(err,result){
    if(err) throw err;
    console.log(result);
});