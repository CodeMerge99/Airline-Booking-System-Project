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

async function getAirplanes(req,res){
    try {
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplanes;
        return res.status(StatusCodes.OK)
                  .json(SuccessResponse);
    } catch (error) {
         return res.status(Error.StatusCode).json(ErrorResponse);
    }
}



//POST /airplane/:id
//req-body {}
async function getAirplane(req,res){
    try {
        const airplanes = await AirplaneService.getAirplanes(req.params.id);
        SuccessResponse.data = airplanes;
        return res.status(StatusCodes.OK)
                  .json(SuccessResponse);
    } catch (error) {
         return res.status(Error.StatusCode).json(ErrorResponse);
    }
}

//DELETE :/aiplane/id
async function destroyAirplane(req,res){
    try {
        const airplanes = await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data = airplanes;
        return res.status(StatusCodes.OK)
                  .json(SuccessResponse);
    } catch (error) {
         return res.status(Error.StatusCode).json(ErrorResponse);
    }
}

module.exports ={
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane
}