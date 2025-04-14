const express = require("express");
const { SeriesService } = require("../controllers/Series.service");


class SeriesRoutes {


    static initRoutes(){

        try {
            
            const router = express.Router()

            const serieController = new SeriesService()

            router.post("/series", serieController.create)
            router.get("/series/:id", serieController.getAllByIdCategory)

            return router

        } catch (error) {
            throw new Error(`${error}`);
            
        }
    }
    

}

module.exports = {
    SeriesRoutes
}