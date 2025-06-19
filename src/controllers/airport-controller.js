const { StatusCodes } = require("http-status-codes");
const {AirportService} = require("../services");
const { SuccessResponse, ErrorResponse} = require("../utils/common");

// POST :/airports
//req-body : {name:'delhi,address:"India",code:123,cityId:3428}




async function createAirport(req,res){
         try {
            const airport = await AirportService.createAirport({
                name:req.body.name,
                address:req.body.address,
                code:req.bosy.code,
                cityId:req.body.cityId,
            });
            SuccessResponse.data = airport;
            return res.status(StatusCodes.CREATED).json(SuccessResponse);
         } catch (error) {
            return res.status(Error.StatusCode).json(ErrorResponse);
         }
}

//POSt - /airports
//req-body {}
async function getAirports(req,res){
    try {
        const airports = await AirportService.getAirports();
        SuccessResponse.data = airports;
        return res.status(StatusCodes.OK)
                  .json(SuccessResponse);
    } catch (error) {
         return res.status(Error.StatusCode).json(ErrorResponse);
    }
}



//POST /airplane/:id
//req-body {}
async function getAirport(req,res){
    try {
        const airports = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airports;
        return res.status(StatusCodes.OK)
                  .json(SuccessResponse);
    } catch (error) {
         return res.status(Error.StatusCode).json(ErrorResponse);
    }
}

//DELETE :/aiplane/id
async function destroyAirport(req,res){
    try {
        const response = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK)
                  .json(SuccessResponse);
    } catch (error) {
         return res.status(Error.StatusCode).json(ErrorResponse);
    }
}

module.exports ={
    createAirport,
    getAirports,
    getAirport,
    destroyAirport
}