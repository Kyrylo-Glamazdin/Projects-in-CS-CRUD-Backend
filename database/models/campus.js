const Sequelize = require('sequelize');
const db = require('../db');


//setting up schema for campuses
const Campus = db.define("campus", {
    name: {
        type: Sequelize.STRING,
        allownull: false
    },
    address: {
        type: Sequelize.STRING,
        allownull: true
    },
    image: {
        type: Sequelize.STRING,
        allownull: true,
        defaultValue: 'https://www.svgrepo.com/show/67989/university.svg',
    },
    description: {
        type: Sequelize.STRING,
        allownull: true
    }
}, {
    timestamps: false,
});

module.exports = Campus;