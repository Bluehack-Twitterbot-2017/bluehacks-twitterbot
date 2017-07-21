/**
  * 
  * @param {object} params - the parameters
  * @param {string} params.consumerKey - default parameter. Twitter consumer key
  * @param {string} params.consumerSecret - default parameter. Twitter consumer secret
  * @param {string} params.accessToken - default parameter. Twitter access token
  * @param {string} params.accessTokenSecret - default parameter. Twitter access token secret
  * @param {string} params.targets - comma-separated list of targets to run sentiment analysis on
  *
  *
  * @return which must be a JSON object.
  *         It will be the output of this action.
  *
  */
function error(err, response, body) {
    console.log('Error: [%s]', JSON.stringify(err));
}

function success(data) {
    console.log('Data: [%s]', data);
}

function main(params) {
    const btoa = require('btoa');
    const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
    const xhr = new XMLHttpRequest;
    
    const config = {
        consumerKey: params.consumerKey,
        consumerSecret: params.consumerSecret,
        accessToken: params.accessToken,
        accessTokenSecret: params.accessTokenSecret
    };
    
    const unencodedToken = config.consumerKey + ":" + config.consumerSecret;
    const encodedToken = btoa(unencodedToken);
    var returnedToken = null;
    var retJson = null;
    
    xhr.onReadyStateChange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const resJson = JSON.parse(this.responseText);
            returnedToken = resJson.access_token;
        }
    }
    
    xhr.open('POST', "https://api.twitter.com/oauth2/token", false);
    xhr.setRequestHeader('Authorization', 'Basic '+encodedToken);
    xhr.setRequestHeader('Content-Type', "application/x-www-form-urlencoded;charset=UTF-8");
    xhr.send('grant_type=client_credentials');
    
    const xhr2 = new XMLHttpRequest;
    
    xhr2.onReadyStateChange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const resJson = JSON.parse(this.responseText);
            retJson = resJson;
        }
    }
    
    xhr.open('GET', 'https://api.twitter.com/1.1/search/tweets.json?q=IBM+Watson', false);
    xhr.setRequestHeader('Authorization', 'Bearer '+returnedToken);
    xhr.send();
    
    
    
    
    return retJson;
}
