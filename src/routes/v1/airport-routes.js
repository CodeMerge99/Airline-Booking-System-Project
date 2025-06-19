const express = require("express");
const router = express.Router();

const {AirportController} = require("../../controllers");
const { AirportMiddlewares} = require("../../middlewares");


//api/v1/airplanes POST//
router.post("/",
    AirportMiddlewares.validateCreateRequest,
    AirportController.createAirport);
// /api/v1/airplanes GET//
router.get("/",
    AirportController.getAirports);

//api/v1/airplanes/:id GET-REQUEST
router.get("/:id",
    AirportController.getAirports);
//api/v1/airplanes/:id DELETE-REQUEST
router.delete("/:id",
    AirportController.destroyAirport);

module.exports = router;