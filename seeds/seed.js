const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const seedPost = require('./postData');
const seedUser = require('./userData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await seedUser();
  await seedPost();
  process.exit(0);
};

seedDatabase();
