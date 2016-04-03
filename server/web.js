var express = require('express');
var cors = require('cors')

var app = express();
app.use(cors())

var API_KEY = "45548832";
var SECRET = "dd48288c2fc7807cb08dcec77009c0fd45efe205";

var OpenTok = require('opentok');
var opentok = new OpenTok(API_KEY, SECRET);

app.listen(process.env.PORT || 5000, function () {
	var port = process.env.PORT || 5000;
	console.log("server started on port " + port);
	app.use(express.static('dist'));
});

app.get("/generatesession", function(req, res) {
	console.log(opentok);	
	var sessionId;
	opentok.createSession({mediaMode:"routed"}, function(error, session) {
	  if (error) {
	    console.log("Error creating session:", error)
	  } else {
	    sessionId = session.sessionId;
	    res.send({sessionId: sessionId});
	  }
	});
})

app.get("/gettoken", function(req, res) {
	console.log(req);
	var tokenOptions = {};
	tokenOptions.role = "publisher";
	tokenOptions.data = "username=bob";
	var token = opentok.generateToken(sessionId, tokenOptions);
	res.send({Token: token});
})



