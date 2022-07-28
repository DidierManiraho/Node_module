var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Polwac9!9!",
    database:"mydb"
});

var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE address = '+ mysql.escape(adr);

con.query(sql,function(err,result){
    if(err) throw  err;
    console.log(result);
});