const { UserControllerService } = require("../controllers/User.controller.service");
const express = require("express")


const UserRoutesUtils = {
 
    routerService : express.Router(),
    controllerService : new UserControllerService()

    
}

class UserRoutes {

    static initUserRoutes(){

        try {
            
            const routerService = UserRoutesUtils.routerService
            const controllerService = UserRoutesUtils.controllerService

            routerService.post("/users", controllerService.create)


            return routerService
            

        } catch (error) {
            throw new Error(`${error}`);
            
        }
    }

}

module.exports = {
    UserRoutes
}