const CrudRepository = require("../repositories/crud-repository");
const {City} = require("../models/city");

class CityRepository extends CrudRepository{
      constructor(){
        super(City);
      }
}

module.exports = {
  CityRepository,
}