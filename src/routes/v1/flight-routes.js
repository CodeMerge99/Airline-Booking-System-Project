const express = require("express");
const router = express.Router();

const {FlightController} = require("../../controllers");
const { FlightMiddlewares} = require("../../middlewares");


//api/v1/airplanes POST//
router.post("/",
    FlightMiddlewares.validateCreateRequest,
    FlightController.createFlight);
//api/v1/flights?trips=MUM-NGP GET//
router.get(
  "/",

  FlightController.getAllFlights
);

module.exports = router;