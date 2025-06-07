const express = require("express");
const router = express.Router();

const{infocontrollers} = require("../../controllers");

router.get("/info",infocontrollers.info);

module.exports = router;