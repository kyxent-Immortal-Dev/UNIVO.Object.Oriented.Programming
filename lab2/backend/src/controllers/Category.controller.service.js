const { ModelCategory } = require("../models/Category.model");


class CategoryService {

    async create(req, res){

        
        const {name , description} = req.body
        try {
            

            const category = await ModelCategory.create({name , description})

            res.status(201).json({
                msj : "created successfully 200 OK",
                data : category
            })


        } catch (error) {
            res.status(500).json({
                msj : "server error",
                error : error
            })
            throw new Error(`${error}`);
            
        }

    }

    async getAll(req, res) {

        try {
            
            const data = await ModelCategory.find()

            res.status(200).json({
                msj : "all categories 200 Ok",
                data : data
            })

        } catch (error) {
            throw new Error(`${error}`);
            
        }
    }

    async delete(req, res) {

        const {id} = req.params


        try {

            const deleteCategory = await ModelCategory.findByIdAndDelete(id)

            res.status(200).json({
                msj : "delete successfully 200 OK",
                data : deleteCategory
            })


            
        } catch (error) {
            res.status(500).json({
                msj : "server error",
                error : error
            })
            throw new Error(`${error}`);
        }

    }

}



module.exports = {
    CategoryService
}