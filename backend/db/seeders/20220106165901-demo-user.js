'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {


    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'demouser@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('passsword'),
      },
      {
        email: 'otherdemouser@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('otherpassword'),
      },
      {
        email: 'kidcudi@user.io',
        username: 'kidcudi',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'kanyewest@user.io',
        username: 'kanyewest',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'traviscott@user.io',
        username: 'traviscott',
        hashedPassword: bcrypt.hashSync('password'),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    const Op = Sequelize.Op;

    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2', 'kidcudi', 'kanyewest', 'traviscott'] }
    }, {});
  }
};
