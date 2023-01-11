const sequelize = require('../config/connection');
const { User, Project } = require('../models');

const userData = require('./userData');
const postData = require('./postData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  process.exit(0);
};

seedDatabase();
