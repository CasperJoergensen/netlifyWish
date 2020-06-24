const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const wishSchema = new Schema({
    name: String,
    price: Number
})
const Wish = mongoose.model('Wish', wishSchema)

exports.handler = async function (event, context) {
    await mongoose.connect(process.env.MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.error("Error while connecting to database")
            return {statusCode: 500, body: JSON.stringify({msg: "Error while connecting to database"})}
        }
        console.log("Connected to database")
    })

    const {user} = context.clientContext
    console.log(context)
    let result;
    switch (event.httpMethod) {
        case 'POST':
            let wish = JSON.parse(event.body)
            wish = {...wish, userId: user.sub}
            result = post(wish);
            break;
        case 'GET':
            const {queryStringParameters} = event;
            console.log(queryStringParameters)
            result = await get(queryStringParameters, user)
            break
        default:
            return {statusCode: 400, body: JSON.stringify({msg: "Only 'POST' and 'GET' is valid"})}
    }

    return {
        statusCode: 200,
        body: JSON.stringify(result)
    }
}

function post(data) {
    const wish = new Wish(data)

    return new Promise(((resolve, reject) => {

    wish.save((err, newWish) => {
        if (err) reject(err);
        return resolve(newWish)
    })
    }))
}

function get(queries, user) {
    return new Promise((resolve, reject) => {
        let options = JSON.parse(queries.options)
        options = options.userId ? {...options, userId: user.sub} : options
        typeof options.userId === "boolean" ? (() => delete options.userId)() : (() => {
        })();

        Wish[queries.action](options, (err, result) => {
            if (err) reject(err)
            resolve(result)
        })

    })

}