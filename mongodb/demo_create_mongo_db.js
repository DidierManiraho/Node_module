var Mongoclient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";


Mongoclient.connect(url, function(err,db){
    if(err) throw err;
    console.log("Database created!");
    db.close();
})