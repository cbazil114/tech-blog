const { Post } = require('../models');

const postData = [{
    title: "asdasdsad",
    content: "sadadsdasdadsa",
    user_id: 1
}];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;