import {ReportView} from "../Components/ReportView";
import {DatePicker} from "../Components/DatePicker";
import {ListOfReports} from "../Components/ListOfReports";
// Creation of the server

var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('bpdy-parser');

app.use(cors());

app.use(bodyParser());

let data = "";

app.get('/report/:lat/:long', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send(str);
    console.log(str);
});

app.post('/report', function (req, res) {
    data = req.body;
    console.log(data);
    res.send({message : 'Succeessfully pposted data'});
});


app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

app.listen(27017);

// Base de données
var MongoClient = require("mongodb").MongoClient;
var assert = require('assert');
var url = "mongodb://localhost:27017/review";
var str = "";
MongoClient.connect(url, function(error, db){
    /*assert.equal(null, err);
    console.log("Connected correctly to server");

    db.close();*/
    if (error) throw error;
    console.log("Connecté à la base de données 'review'");
    var dbo = db.db("mydb");
    db.collection("personnages").find({}).toArray(function(error, results){

        if (error) throw error;
        console.log(results);
        str = results;
        //console.log(str);
        db.close();

    });

});
/*

results.forEach(function(i, obj){
    console.log(
        "ID : " + obj._id+ "\n",
        "Nom : " + obj.name + "\n"
    );
});*/
//"23/11/2018 23:28"
//db.personnages.insert( { title: string, time: "Half-Life" , position : coordinates} );
