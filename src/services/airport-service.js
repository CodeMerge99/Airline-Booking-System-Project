const {AirportRepository} = require("../repositories");
const {StatusCodes} = require("http-status-codes");
const AppError = require("../utils/errors/app-error");

const airportRepository  = new AirportRepository();

 async function createAirport(data){
        try {
            const airport = await airportRepository.create(data);
            return airport;
        } catch (error) {
            if(error.name == 'SequelizeValidationError'){
                let explanation = [];
                error.errors.forEach((err) => {
                    explanation.push(err.message);
                });
                console.log(explanation);
                throw new AppError(explanation,StatusCodes.BAD_REQUEST);
            }
            throw new AppError('Cannot create a new Airport Object',StatusCodes.INTERNAL_SERVER_ERROR);
        }
}

async function getAirports(){
    try {
        const airport = await airportRepository.getAll();
        return airport; 
    } catch (error) {
        throw new AppError('Cannot fetch Data of all Airport ',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function getAirport(id){
    try {
        const airport = await airportRepository.get(id);
        return airport;
    } catch (error) {
        if(error.StatusCode == StatusCodes.NOT_FOUND){
            throw new AppError("Requested Airport is not present",error.StatusCode);
        }
        throw new AppError('Cannot fetch the data for the given airport',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function destroyAirport(id){
    try {
        const response = await airportRepository.destroy(id);
        return response; 
    } catch (error) {
        if(error.StatusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airport you requested to delete is not present",error.StatusCode);
        }
        throw new AppError('Cannot destroy Airport ',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
module.exports ={
    createAirport,
    getAirport,
    getAirports,
    destroyAirport,
}