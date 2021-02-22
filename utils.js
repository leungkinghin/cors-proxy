const fs = require('fs');
const yaml = require('js-yaml');

function loadConfig() {
    let fileContents = fs.readFileSync('./config.yaml', 'utf8');
    let config = yaml.load(fileContents);
    return config;
}

module.exports = loadConfig();