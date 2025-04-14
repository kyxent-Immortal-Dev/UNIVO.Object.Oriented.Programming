const express = require("express");
const { SeriesService } = require("../controllers/Series.service");

class SeriesRoutes {
    static initRoutes() {
        try {
            const router = express.Router();
            const serieController = new SeriesService();

            router.post("/series", serieController.create);
            
            router.get("/series/:id", serieController.getAllByIdCategory);
            
            router.get("/series/detail/:id", serieController.getById);
            
            router.put("/series/:id", serieController.update);
            
            router.patch("/series/:id/title", serieController.updateTitle);
            
            router.delete("/series/:id", serieController.delete);

            return router;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }
}

module.exports = {
    SeriesRoutes
}