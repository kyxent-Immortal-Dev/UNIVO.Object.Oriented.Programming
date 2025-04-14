const express = require("express");
const { CategoryService } = require("../controllers/Category.controller.service");



class CategoryRoutes {

    static initRoutes(){

        try {
            const routes = express.Router()
    
            const controllerService = new CategoryService()
    
            routes.post("/category", controllerService.create)
            routes.get("/category", controllerService.getAll)

            routes.delete("/category/:id", controllerService.delete)
    
            return routes
        } catch (error) {
            throw new Error(`${error}`);
            
        }

    }


}


module.exports = {
    CategoryRoutes
}