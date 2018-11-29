// Base de données
let MongoClient = require("mongodb").MongoClient;
let assert = require('assert');
let url = 'mongodb://localhost:28017/report';
let str = "";
console.log(url);

MongoClient.connect(url, {useNewUrlParser: true}, {usePushEach: true}, (error, db)=>{
    assert.equal(null, error);
    console.log("Connected correctly to server");

    //db.close();
    if (error) return error;
    console.log("Connecté à la base de données 'report'");
    let dbo = db.db("mydb");
    dbo.collection("report").find({}).toArray(function(error, results){
        if (error) return error;
        console.log(results);
        str = results;
        //console.log(str);
        db.close();
    });
    //if(error) throw error;

});
