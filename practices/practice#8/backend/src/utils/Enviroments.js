const dotenv = require('dotenv');
dotenv.config();

const Enviroments = {
    PORT : process.env.PORT,
    MONGO_URI : process.env.MONGO_URI
}

module.exports = Enviroments