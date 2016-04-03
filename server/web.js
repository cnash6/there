// var gzippo = require('gzippo');
//   var express = require('express');
//   var app = express();
//    app.use(gzippo.staticGzip("" + __dirname + "/dist"));
//   app.listen(process.env.PORT || 5000);



// var gzippo = require('gzippo');
// var express = require('express');
// var morgan = require('morgan');
// var app = express();

// app.use(morgan('dev'));
// app.use(gzippo.staticGzip("" + __dirname + "/dist"));
// app.listen(process.env.PORT || 5000);

var express = require('express');
var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.listen(process.env.PORT || 5000, function () {
	var port = process.env.PORT || 5000;
	console.log("server started on port " + port);
	app.use(express.static('dist'));
});

