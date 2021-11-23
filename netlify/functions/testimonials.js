const testimonials = require('../../data/testimonials.json');

exports.handler = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify(testimonials),
    }
} 