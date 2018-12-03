// Creation of the server

//let MongoClient = require("mongodb").MongoClient;
let mongodb = require('mongodb');
let url = 'mongodb://scorcaud:cpark$$2018@ds261929.mlab.com:61929/cparkchallenge';
let str = "";
let express = require('express');
let cors = require('cors');
let app = express();
let bodyParser = require('body-parser');
let router = express.Router();

app.use(cors());

app.use(bodyParser.json());

let data = '';


router.post('/report', function (req, res) {
    let MongoClient = mongodb.MongoClient;

    let url = 'mongodb://scorcaud:cpark$$2018@ds261929.mlab.com:61929/cparkchallenge/';

    MongoClient.connect(url, function (err, db) {
       if(err){
           console.log('Unable to connect to the server', err);
       }else{
           console.log('Connected to server');

           var collection = db.collection('report');

           var report1 = {report: req.body.data};

           collection.insert([report1], function (err, result) {
               if (err){
                   console.log(err);
               }else {
                   res.redirect("Report Update");
               }
               db.close();
           });
       }

    });

});

module.exports = router;

/*app.get('/report/:lat/:long', (req, res) => {
	res.setHeader('Content-Type', 'text/plain');
	res.send(str);



   /!* MongoClient.connect(url, {useNewUrlParser: true}, {usePushEach: true}, (error, db)=>{
        if (error) return error;
        console.log("Connecté à la base de données 'report'");
        let dbo = db.db("mydb");
        if (error) throw error;

        console.log("Le document a bien été inséré");

    });*!/

});*/

/*app.post('/report', (req, res) => {
    console.log('requested report')
    data = req.body;
    console.log(data);

    let MongoClient = mongodb.MongoClient;

    MongoClient.connect(url, function (err, db){
        if(err){
            console.log('Unable to connect to the server', db);
        } else {
            console.log('Connection established');
            var collection = db.collection('/report')
        }
    })*/

    //res.send(console.log(data));
   /* MongoClient.connect(url, {useNewUrlParser: true}, {usePushEach: true}, (error, db)=>{
        //if (error) return error;
        //console.log("Connecté à la base de données 'report'");
        //let dbo = db.db("mydb");
        db.collection("report").insert(data)
        console.log(data)
        if (error) throw error;

        console.log("Le document a bien été inséré");

    });*/

	res.send({ message: 'Succeessfully posted data' });
});



app.listen(process.env.PORT || 5000, () => console.log('Sucessfully started app on port ', process.env.PORT || 5000));
