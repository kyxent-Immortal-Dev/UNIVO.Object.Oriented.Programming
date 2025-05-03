const express = require("express")
const { MongoClient, ObjectId } = require('mongodb');
const { Enviroments } = require("../plugins/Enviroments");
const { ShipmentAbstract } = require("../class/ShipmentAbstract");

class ShipmentController extends ShipmentAbstract {

    constructor(name, address, phone , ref , observation){
        super(name, address, phone , ref , observation)
    }

    async connectToMongo(){
        const client = new MongoClient(Enviroments.MONGO)
        try {
            
            await client.connect()

        } catch (error) {

            if(error instanceof Error){
                throw error
            }
            
        }
    }

    async createShipment(req, res){

        try {

            const ship = await this.connectToMongo.collection('shipments').insertOne(this.shipment)

            res.status(201).json({
                msj : "ship created",
                data : ship
            })

        } catch (error) {
            if(error instanceof Error){
                throw error
            }
        }
    }


}


module.exports = {
    ShipmentController
}