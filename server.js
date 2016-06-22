var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});


// Experiment begin request
app.get('/begin', (req, res) => {
	console.log("Begin request recieved.");
});

// Text handling and routing
app.route('/notes')
	.get((req, res) => {
		res.sendFile(__dirname + '/notes.html');
	})
	.post((req, res) => {
		var text = req.body.text;
		
	});

// start server
app.listen(3000, () => {
	console.log("Server started");
});

