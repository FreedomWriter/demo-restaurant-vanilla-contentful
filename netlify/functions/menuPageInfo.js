const page = require('../../data/pages.json');

exports.handler = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify(page.menu),
    }
}