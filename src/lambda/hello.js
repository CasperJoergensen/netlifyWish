exports.handler = function(event, context, callback) {
    console.log('queryStringParameters', event.queryStringParameters)
    return callback(null, {
        statusCode: 200,
        body: JSON.stringify({ msg: 'Hello, World!' }),
    })
}