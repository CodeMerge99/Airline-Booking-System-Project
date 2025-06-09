const express = require("express");
const router = express.Router();

const{infocontrollers} = require("../../controllers");

const airplaneRoutes = require("./airplane-routes");

router.use("/airplanes",airplaneRoutes);
router.get("/info",infocontrollers.info);

module.exports = router;