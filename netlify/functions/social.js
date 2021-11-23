const info = require('../../data/info.json');

exports.handler = async () => {
    console.log("yooooo")
    return {
        statusCode: 200,
        body: JSON.stringify(info.social),
    }
}