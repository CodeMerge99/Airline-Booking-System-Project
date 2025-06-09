const { StatusCodes } = require("http-status-codes");
const {AirplaneService} = require("../services");
const { SuccessResponse, ErrorResponse} = require("../utils/common");

// POST :/airplane
//req-body : {modelNumber:boeing,capacity:15}




async function createAirplane(req,res){
         try {
            const airplane = await AirplaneService.createAirplane({
                modelNumber : req.body.modelNumber,
                capacity : req.body.capacity

            });
            return res.status(StatusCodes.CREATED).json(SuccessResponse);
         } catch (error) {
            return res.status(Error.StatusCode).json(ErrorResponse);
         }
}

module.exports ={
    createAirplane
}