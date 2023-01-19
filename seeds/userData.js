const { User } = require('../models');

const userData = [{
    id: 1,
    name: "Connor",
    email: "connor-bazil@comcast.net",
    password: "connor123"
}];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;