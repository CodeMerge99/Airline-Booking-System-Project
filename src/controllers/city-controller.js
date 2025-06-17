const { StatusCodes } = require("http-status-codes");
const {CityService} = require("../services/city-service");
const { SuccessResponse, ErrorResponse} = require("../utils/common");



//POST- /cities
//req-body : {name:"london"}
async function createCity(req,res){
         try {
            const city = await CityService.createCity({
                name:req.body.name,
            });
            SuccessResponse.data = city;
            return res.status(StatusCodes.CREATED).json(SuccessResponse);
         } catch (error) {
            return res.status(Error.StatusCode).json(ErrorResponse);
        }
}

module.exports ={
    createCity
}
