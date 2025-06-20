const {CityRepository} = require("../repositories/city-repository");
const {StatusCodes} = require("http-status-codes");
const AppError = require("../utils/errors/app-error");

const cityRepository  = new CityRepository();

async function createCity(data){
       try {
            const city = await cityRepository.create(data);
            return city;
        } catch (error) {
            if(error.name == 'SequelizeValidationError' || 'SequelizeUniqueConstraintError'){
                let explanation = [];
                error.errors.forEach((err) => {
                    explanation.push(err.message);
                });
                console.log(explanation);
                throw new AppError(explanation,StatusCodes.BAD_REQUEST);
            }
            throw new AppError('Cannot create a new City Object',StatusCodes.INTERNAL_SERVER_ERROR);
        }
}

module.exports = {
    createCity,
}