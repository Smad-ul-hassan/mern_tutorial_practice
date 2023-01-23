const mongoose = require('mongoose')
const connectionDb = async () => {
    try {
        const con = await mongoose.connect("mongodb+srv://smad:1234@smad.hldcn0o.mongodb.net/?retryWrites=true&w=majority")
        mongoose.set('strictQuery', false)
        console.log("this is a connection " + con.connection.host)
    }
    catch (error) {
        console.log("This is a error", error);
        process.exit(1)
    }
}
module.exports = connectionDb 