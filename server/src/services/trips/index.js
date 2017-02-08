'use strict';

const service = require('feathers-sequelize');
const trips = require('./trips-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: trips(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/trips', service(options));

  // Get our initialize service to that we can bind hooks
  const tripsService = app.service('/trips');

  // Set up our before hooks
  tripsService.before(hooks.before);

  // Set up our after hooks
  tripsService.after(hooks.after);
};
