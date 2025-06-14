const {AirplaneRepository} = require("../repositories");
const {StatusCodes} = require("http-status-codes");
const AppError = require("../utils/errors/app-error");

const airplaneRepository  = new AirplaneRepository();

 async function createAirplane(data){
        try {
            const airplane = await airplaneRepository.create(data);
            return airplane;
        } catch (error) {
            if(error.name == 'SequelizeValidationError'){
                let explanation = [];
                error.errors.forEach((err) => {
                    explanation.push(err.message);
                });
                console.log(explanation);
                throw new AppError(explanation,StatusCodes.BAD_REQUEST);
            }
            throw new AppError('Cannot create a new Airplane Object',StatusCodes.INTERNAL_SERVER_ERROR);
        }
}

async function getAirplanes(){
    try {
        const airplanes = await airplaneRepository.getAll();
        return airplanes; 
    } catch (error) {
        throw new AppError('Cannot fetch Data of all Airplanes ',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function getAirplane(id){
    try {
        const airplane = await airplaneRepository.get(id);
        return airplane;
    } catch (error) {
        if(error.StatusCode == StatusCodes.NOT_FOUND){
            throw new AppError("Requested Airplane is not present",error.StatusCode);
        }
        throw new AppError('Cannot fetch the data for the given airplane',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function destroyAirplane(id){
    try {
        const response = await airplaneRepository.destroy(id);
        return response; 
    } catch (error) {
        if(error.StatusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airplane you requested to delete is not present",error.StatusCode);
        }
        throw new AppError('Cannot fetch Data of all Airplanes ',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
module.exports ={
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane
}