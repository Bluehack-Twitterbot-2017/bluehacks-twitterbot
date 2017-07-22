var app = angular.module('myApp', []);

var listOfTweets = [];

app.controller('myCtrl', function($scope, TwitterService){
	$scope.getSearch = function(search){
		console.log("search entered:", search);
		TwitterService.getSearch(search)
		    .then(function(data){
            parsedData = JSON.parse(data.result.searchData);
            tweets = parsedData.statuses;
            // console.log(tweets);

            listOfTweets = tweets;
            console.log("listof tweets:",listOfTweets);
            // console.log(listOfTweets.length)

		        $scope.twitterErrors = undefined;
            $scope.results = tweets

            sentimentAnalysis();
		    })
		    .catch(function(error){
		        console.error('there was an error retrieving data: ', error);
		        $scope.twitterErrors = error.error;
		    })
	}
});

app.factory('TwitterService', function($http, $q){
  var getSearch = function(search){
    var d = $q.defer();
    $http.post('/twitter/user', {search : search})
      .success(function(data){
        return d.resolve(data);
      })
      .error(function(error){
        return d.reject(error);
      });
    return d.promise;
  };

  return {
    getSearch : getSearch
  }
});

sentimentAnalysis = function () {
  const OPENWHISK_BACKEND = 'https://service.us.apiconnect.ibmcloud.com/gws/apigateway/api/ab595eef9b6280db8eaf8c669ee4075b2d0a902858efa28b310ac00eb1248744/bluehacks-api/submit';

  var keywordInput = document.getElementById("keywordInput").value;
  var firstKeyword = keywordInput.split(",")[0];
  var secondKeyword = keywordInput.split(",")[1];

  for (var i = 0; i < listOfTweets.length; i++) {
    fetch(OPENWHISK_BACKEND, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        input: listOfTweets[i].text,
        target: {
          first: firstKeyword,
          second: secondKeyword
        }
      })
    })
    .then(response => response.json())
    .then(function(messageResponse){

      if (messageResponse.sentiment) {
        console.log("Tweet:", messageResponse.input);
        if (messageResponse.sentiment.targets[0].text === "ibm") {
          console.log("Sentiment:", messageResponse.sentiment.targets[0].label);
        }
      }

    })
  }
}

    // for segmented control
    var checked1 = $('#option-1').is(':checked');
    var checked2 = $('#option-2').is(':checked');
    if (checked1 == 1) {
      $('.Step_1_Content').show();
      $('.Step_2_Content').hide();
      $('button[name=submitBtn]').show();
    } else if (checked2 == 1) {
      $('.Step_2_Content').show();
      $('.Step_1_Content').hide();
      $('button[name=submitBtn]').hide();
    }
    $(".segmented-control").change(function () {
      var checked1 = $('#option-1').is(':checked');
      var checked2 = $('#option-2').is(':checked');

      if (checked1 == 1) {
        $('.Step_1_Content').show();
        $('.Step_2_Content').hide();
        $('button[name=submitBtn]').show();
      } else if (checked2 == 1) {
        $('.Step_2_Content').show();
        $('.Step_1_Content').hide();
        $('button[name=submitBtn]').hide();
      }
    });
