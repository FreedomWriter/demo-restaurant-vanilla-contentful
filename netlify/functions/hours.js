const info = require('../../data/info.json');

exports.handler = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify(info.hours),
    }
}