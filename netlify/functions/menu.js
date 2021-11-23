const menu = require('../../data/menu.json');

exports.handler = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify(menu),
    }
}