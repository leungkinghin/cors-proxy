const http = require('http');
const constants = require('./constants');

const requestListener = function (req, res) {
    // TODO : Redirect URL to access external API.
}

const startServerCallback = function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening to the port ' + constants.PORT + ' ...');  
}

async function startServer(callback) {
    console.log('Proxy server starts.');
    http.createServer(requestListener).listen(constants.PORT, err => callback(err));
}

startServer(startServerCallback);
