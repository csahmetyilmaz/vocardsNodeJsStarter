const mongoose = require('mongoose')
const client = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }).then(() => {
        console.log("mongoDb connection successful")
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = client