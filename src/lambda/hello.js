exports.handler = function(event, context, callback) {
    const name = event.queryStringParameters || 'World!'
    return callback(null, {
        statusCode: 200,
        body: context.functionName,

    })
}