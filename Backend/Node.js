// Creation of the server

//let MongoClient = require("mongodb").MongoClient;
let mongodb = require('mongodb');
let str = "";
let express = require('express');
let cors = require('cors');
let app = express();
let bodyParser = require('body-parser');
//let router = express.Router();

app.use(cors());

app.use(bodyParser.json());


//router.use(cors());
// router(bodyParser.json());

let data = '';


app.get('/report/:lat/:long', (req, res) => {
    console.log('Requested list of report');
    data = req.body;

    let MongoClient = mongodb.MongoClient;

    let url = 'mongodb://samcor:cparkchallenge2018@ds119663.mlab.com:19663/cparkchallengetest';

    MongoClient.connect(url, {useNewUrlParser: true}, (err, db)=>{
        let dbo = db.db('cparkchallengetest');
        if (err) {
            console.log('Impossible de récupérer les infos', err);
        }else {
            console.log('Connection established');
            var collection = dbo.collection('report');
            collection.find({}).toArray(function(err, results){
               if(err){
                   res.send('Error detected', err);
                   console.log('Error detected', err);
               }else{
                   console.log('Near the results')
                   res.json(results);
                   console.log('Succcess for getting report', results)
               }
            });
            console.log('Connection etablished');
        }


    });

});

app.post('/report', (req, res) => {
    console.log('requested report');
    //data = req.body;
    console.log(data);

    let MongoClient = mongodb.MongoClient;

    //let url = 'mongodb://samcorcaud:cpark2018@ds261929.mlab.com:61929/cparkchallenge';
    let url = 'mongodb://samcor:cparkchallenge2018@ds119663.mlab.com:19663/cparkchallengetest';


    MongoClient.connect(url, {useNewUrlParser: true}, function (err, db){
        let dbo = db.db('cparkchallengetest');
        if(err){
            console.log('Unable to connect to the server', err);
        } else {
            console.log('Connection established');
            var collection = dbo.collection('report');
            console.log('In collection report');
            var report1 = {title : req.body.title, longitude: req.body.position.long, latitude: req.body.position.lat, date: req.body.dateTime};
            console.log(report1);

            collection.insertMany([report1], null, function (err, result) {
                if(err){
                    console.log('Unable to add this to the collection', err);
                }else{
                    console.log('Ajouté à la collection');
                }
                db.close();
            });
        }
    });
	res.send({ message: 'Successfully posted data' });

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
});



app.listen(process.env.PORT || 5000, () => console.log('Sucessfully started app on port ', process.env.PORT || 5000));
