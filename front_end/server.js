module.exports = require('./node_modules/twitter-node-client/lib/Twitter');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var error = function (err, response, body) {
    console.log('ERROR [%s]', JSON.stringify(err));
};
var success = function (data) {
    console.log('Data [%s]', data);
};

var config = {
    "consumerKey": "s6s9VP79CcadIgfMoFBmcqvQh",
    "consumerSecret": "5V5E7SjGPlAYPMYDIwuMPT3xLk6hoqaRGwSrGQTWl9UGC6w516",
    "accessToken": "1705570982-swwza31zM75IQlRJTmK1W8ab1rDThJh8KtSnipw",
    "accessTokenSecret": "m5WMfxD7eVFaRnEYjvQcUV8aCc4F9cm0q9GnjFpJmxBBK"
};

var twitter = new module.exports.Twitter(config);

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

/*
 * To connect to a front end app (i.e. AngularJS) store all your files you will *
 * statically store in declared below (i.e. ./public) *
*/

app.use(express.static(__dirname + '/public'));

//post to retrieve user data
// app.post('/twitter/user', function (req, res) {
// 	var username = req.body.username;
// 	var data = twitter.getUser({ screen_name: username}, function(error, response, body){
// 		res.status(404).send({
// 			"error" : "User Not Found"
// 		});
// 	}, function(data){
// 		res.send({
// 			result : {
// 				"userData" : data
// 			}
// 		});
// 	});
// });

// post to retrieve search data
app.post('/twitter/user', function (req, res) {
	var search = req.body.search;
	var data = twitter.getSearch({'q':search,'count': 20}, function(error, response, body){
		res.status(404).send({
			"error" : "search results Not Found"
		});
	}, function(data){
		res.send({
			result : {
				"searchData" : data
			}
		});
	});
});

var PORT = 8080
var server = app.listen(PORT, function () {
	console.log("server started on port", PORT)
  	// var host = server.address().address;
  	// var port = server.address().port;
});
