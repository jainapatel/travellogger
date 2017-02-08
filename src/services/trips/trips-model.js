'use strict';

// trips-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
	const trips = sequelize.define('trips', {
		name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		highlights: {
			type: Sequelize.TEXT,
			allowNull: false
		},
		latitude: {
			type: Sequelize.DOUBLE,
			allowNull: false
		},
		longitude: {
			type: Sequelize.DOUBLE,
			allowNull: false
		},
		startDate: {
			type: Sequelize.DATE,
			allowNull: false
		},
		endDate: {
			type: Sequelize.DATE,
			allowNull: false
		}
	}, {
		freezeTableName: true
	});

	trips.sync();

	return trips;
};
