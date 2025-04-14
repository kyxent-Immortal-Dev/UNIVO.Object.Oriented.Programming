require("dotenv/config")


const Enviroments = {
    MONGO_URI : process.env.MONGO_URI,
    PORT      : process.env.PORT
}


module.exports = {
    Enviroments
}