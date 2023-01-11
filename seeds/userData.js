const { User } = require('../models');

const userData = [];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;