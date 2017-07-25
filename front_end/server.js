module.exports = require('./node_modules/twitter-node-client/lib/Twitter');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// var error = function (err, response, body) {
//     console.log('ERROR [%s]', JSON.stringify(err));
// };
// var success = function (data) {
//     console.log('Data [%s]', data);
// };

var config = {
    "consumerKey": "s6s9VP79CcadIgfMoFBmcqvQh",
    "consumerSecret": "5V5E7SjGPlAYPMYDIwuMPT3xLk6hoqaRGwSrGQTWl9UGC6w516",
    "accessToken": "1705570982-swwza31zM75IQlRJTmK1W8ab1rDThJh8KtSnipw",
    "accessTokenSecret": "m5WMfxD7eVFaRnEYjvQcUV8aCc4F9cm0q9GnjFpJmxBBK"
};

var twitter = new module.exports.Twitter(config);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/public'));

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

var port = process.env.PORT || 8080
app.listen(port, function () {
	console.log("server started on port", port)
});
