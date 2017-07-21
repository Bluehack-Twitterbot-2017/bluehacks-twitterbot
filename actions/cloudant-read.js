console.log('reading from cloudant');
function main(params) {
    if (!params._id) {
        Promise.reject(new Error('id cannot be null'))
    }
    //load the package
    var Cloudant = require('cloudant');
        
    var username = params.CLOUDANT_USERNAME;
    var password = params.CLOUDANT_PASSWORD;
    var dbname = 'twitterbotdb';
    var owdb = null;
    //connect to Cloudant
    var cloudant = Cloudant({
        account: username,
        password: password
    });
    
    console.log("checking if exists");
    try {
        console.log('creating');
        owdb = cloudant.db.create(dbname);
        if (db != null) {
            console.log('db exists');
            owdb = cloudant.db.use(dbname);
        }
    } catch(e) {
        console.log('catching');    
        owdb = cloudant.db.use(dbname);
    }
    
    return new Promise(function(resolve, reject) {
        console.log('getting');
        console.log(params.id);
        owdb.get(params._id, function(err, body) {
            if (err) {
                console.log("get doc ", err.message);
                return reject(err);
            }
            console.log('Got doc');
            var output = Object.assign({}, {tweets: params.tweets});
            output._id = body._id;
            output._rev = body._rev;
            
            return resolve(output);
        });
    });
}
