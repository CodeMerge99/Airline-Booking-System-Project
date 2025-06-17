const express = require("express");
const router = express.Router();

const{infocontrollers} = require("../../controllers");


const airplaneRoutes = require("./airplane-routes");
const cityRoutes = require("./city-routes");

router.use("/airplanes",airplaneRoutes);
router.use("/cities",cityRoutes);
router.get("/info",infocontrollers.info);

module.exports = router;