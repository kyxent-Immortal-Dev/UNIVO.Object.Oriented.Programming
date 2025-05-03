const { Router } = require("express");
const { ShipmentController } = require("../controllers/ShipmentController");



class AppRouter {


    static initRoutes(){

        try {

            const router = Router()

            const shipController = new ShipmentController('samsung', 'el salvador', '77777777', 'USULUTAN', 'good')

            router.post("/shipments", shipController.createShipment )

            return router

        } catch (error) {
            if(error instanceof Error){
                throw error
            }
        }
        
    }
}

module.exports = {
    AppRouter
}