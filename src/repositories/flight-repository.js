const CrudRepository = require("../repositories/crud-repository");
const {Sequelize} = require('sequelize');
const { Flight, Airplane, Airport, city } = require("../models");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }
  async getAllFlights(filter, sort) {
    const response = await Flight.findAll({
      where: filter,
      order: sort,
      include: [
        {
          model: Airplane,
          required: true,
          as:'airplaneDetail'
        },
        {
          model:Airport,
          required:true,
          as:'departureAirport',
          on:{
             col1 : Sequelize.where(Sequelize.col("flight.departureAirportId"),"=",Sequelize.col("departureAirport.code"))
          },
          include:{
            model:city,
            required:true
          }
        },
        {
          model:Airport,
          required:true,
          as:'arrivalAirport',
          on:{
             col1 : Sequelize.where(Sequelize.col("flight.arrivalAirportId"),"=",Sequelize.col("arrivalAirport.code"))
          },
          include:{
            model:city,
            required:true
          }
        }
      ],
    });
    return response;
  }
}

module.exports = FlightRepository;
