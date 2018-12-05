/**
 * Creation of the server Node.js which is connected to a MongoDb database.
 * The Mongo database is connected on an mLab url.
 */
let mongodb = require('mongodb');
let express = require('express');
let cors = require('cors');
let app = express();
let bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.json());

let data = '';

/**
 * The get request, collect all the reports in the mongo database.
 * The get request is related to a fetch api in the API class.
 * @param req, request of the client
 * @param res, response of the server
 * @return results, a json object of the report
 */
app.get('/report/:lat/:long', (req, res) => {
    console.log('Requested list of report');
    data = req.body;

    let MongoClient = mongodb.MongoClient;

    let url = 'mongodb://samcor:cparkchallenge2018@ds119663.mlab.com:19663/cparkchallengetest';

    MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
        let dbo = db.db('cparkchallengetest');
        if (err) {
            console.log('Impossible de récupérer les infos', err);
        } else {
            console.log('Connection established');
            var collection = dbo.collection('report');
            collection.find({})
                .toArray(function (err, results) {
                    if (err) {
                        res.send('Error detected', err);
                        console.log('Error detected', err);
                    } else {
                        res.json(results);
                        console.log('Succcess fully fetch report', results);
                    }
                });
        }


    });

});

/**
 * The post request, post the reports which are send by a user.
 * The post request is related to a fetch api in the API class.
 * @param req, request of the client
 * @param res, response of the server
 * @return {string}, who said 'Successfully posted data'
 */
app.post('/report', (req, res) => {
    console.log('requested report');
    console.log(data);

    let MongoClient = mongodb.MongoClient;
    let url = 'mongodb://samcor:cparkchallenge2018@ds119663.mlab.com:19663/cparkchallengetest';

    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        let dbo = db.db('cparkchallengetest');
        if (err) {
            console.log('Unable to connect to the server', err);
        } else {
            console.log('Connection established');
            var collection = dbo.collection('report');
            console.log('In collection report');
            var report1 = {
                title: req.body.title,
                longitude: req.body.position.long,
                latitude: req.body.position.lat,
                date: req.body.dateTime
            };
            console.log(report1);

            collection.insertMany([report1], null, function (err, result) {
                if (err) {
                    console.log('Unable to add this to the collection', err);
                } else {
                    console.log('Added to the collection');
                }
                db.close();
            });
        }
    });
    res.send({ message: 'Successfully posted data' });
});

app.listen(process.env.PORT || 5000, () => console.log('Sucessfully started app on port ', process.env.PORT || 5000));
