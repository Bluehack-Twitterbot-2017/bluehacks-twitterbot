/**                                                                                                                                   
 * Calls the Natural Language Understanding service and returns a location type and disambiguation.                                   
 * @param {Object} params The parameters                                                                                              
 * @param {String} params.NLU_USERNAME The username for the NLU service.                                                              
 * @param {String} params.NLU_PASSWORD The password for the NLU service.                                                              
 */
console.log('nlu');
function main(params) {
    return new Promise(function(resolve, reject) {
        const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
        const USERNAME = params.USERNAME;
        const PASSWORD = params.PASSWORD;
        
        const natural_language_understanding = new NaturalLanguageUnderstandingV1({
            username: USERNAME,
            password: PASSWORD,
            version_date: '2017-02-27'
        });
        console.log('validated credentials');
	// targets for emotions can be set by the user; can be determined by twitter hashtags
        var parameters = {
            text: params.input,
            language: 'en',
            features: {
                entities: {
                    limit: 1,
                    entity: params.input
                },
                emotion: {
                    targets: [
                        params.target.first,
                        params.target.second
                    ]
                },
                sentiment: {
                    targets: [
                        params.target.first,
                        params.target.second
                    ]
                }
            }
        };
        
        console.log('analyzing nlu');
        natural_language_understanding.analyze(parameters, function(err, response) {
            if (err && parameters.text !== "") {
                console.log('error');
                console.log(err);
                return reject(err);
            }
            var output = response;
            return resolve(output);
        });
    });
}
