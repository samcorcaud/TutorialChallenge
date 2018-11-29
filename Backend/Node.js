// Creation of the server

let express = require('express');
let cors = require('cors');

let app = express();
let bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser());

let data = '';

app.get('/report/:lat/:long', (req, res) => {
	res.setHeader('Content-Type', 'text/plain');
	res.send(str);

});

app.post('/report', (req, res) => {
	data = req.body;
	console.log(data);
	res.send({ message: 'Succeessfully pposted data' });
});


app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
	res.status(404).send('Page introuvable !');
});

app.listen(28017);
