const express = require("express");
const router = express.Router();

const{infocontrollers} = require("../../controllers");


const airplaneRoutes = require("./airplane-routes");
const cityRoutes = require("./city-routes");
const airportRoutes = require("./airport-routes");

router.use("/airplanes",airplaneRoutes);
router.use("/cities",cityRoutes);
router.get("/info",infocontrollers.info);
router.use("/airports",airplaneRoutes);

module.exports = router;