var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Polwac9!9!",
    database:"mydb"
});

con.connect(function(err){
    if(err) throw err;
    var sql = "CREATE TABLE customers (name VARCHAR(255),address VARCHAR(255))";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log("Table created");
    })
})