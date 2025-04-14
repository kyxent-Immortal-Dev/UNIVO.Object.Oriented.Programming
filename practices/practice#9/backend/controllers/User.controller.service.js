const { ModelUser } = require("../models/User.model");



class UserControllerService {


    async create(req, res){

        const {name, lastname, age} = req.body

        try {
            
            const user = await ModelUser.create({name, lastname, age})

            return res.status(201).json({
                msj  : "user created",
                data : user
            })

        } catch (error) {
            res.status(500).json({
                msj : "problem in server",
                error : error
            })
            throw new Error(`${error}`);
            
            
        }
    }

}


module.exports = {
    UserControllerService
}