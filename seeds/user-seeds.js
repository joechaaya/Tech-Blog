const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'Johnsnow',
    email: 'johnsnow@nightwatch.com',
    password: 'pw123456'
  },
  {
    username: 'Optimus',
    email: 'transformers@autobots.com',
    password: 'pw123456'
  },
  {
    username: 'Shepard',
    email: 'commander2@n7.com',
    password: 'pw123456'
  },
  {
    username: 'Bugs',
    email: 'looneytoons@warner.com',
    password: 'pw123456'
  }

];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;