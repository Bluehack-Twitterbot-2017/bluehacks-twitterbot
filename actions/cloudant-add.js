console.log('reading from cloudant');
function main(params) {
    if (!params._id || !params.id) {
        Promise.reject(new Error('id cannot be null'))
    }
    
    //load the package
    var Cloudant = require('cloudant');
    var username = params.CLOUDANT_USERNAME;
    var password = params.CLOUDANT_PASSWORD;
    var dbname = 'twitterbotdb';
    var owdb = null;
    console.log('connecting to cloudant');
    //connect to Cloudant
    var cloudant = Cloudant({
        account: username,
        password: password
    });
    console.log('connected');
    
    console.log("checking if exists");
    try {
        console.log("creating");
        owdb = cloudant.db.create(dbname);
        if (db != null) {
            console.log("db exists");
            owdb = cloudant.db.use(dbname);
        }
    } catch(e) {
        console.log("catching");    
        owdb = cloudant.db.use(dbname);
    }
    
    return new Promise(function(resolve, reject) {
        console.log('inserting');
        owdb.insert({"tweets": {}}, params._id, function(err, body, header) {
            if (err) {
                console.log('[db.insert]', err.message)
                return reject(err);
            }
            console.log('You have inserted the doc.');
            console.log(body);
            console.log('ID ', params._id);
            
            var output = Object.assign({});
            output._id = body.id;
            output._rev = body.rev;
            return resolve(output);
        });
    });
}
