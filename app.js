const http = require('http');
const request = require('request')
const config = require('./utils');

const requestListener = function (req, res) {
    let method = req.method
    console.log(request.path)
    var options = {
        url: config.host.url,
        method: req.method,
    }
    res.setHeader('Access-Control-Allow-Origin', '*')
    request(options, (err, response, body)=> {
        console.log(body)
        res.write(body)
        res.end()
    })
}

const startServerCallback = function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening to the port ' + config.proxy.port + ' ...')
}

async function startServer(callback) {
    console.log('Proxy server starts.')
    http.createServer(requestListener).listen(config.proxy.port, err => callback(err))
}

startServer(startServerCallback)
