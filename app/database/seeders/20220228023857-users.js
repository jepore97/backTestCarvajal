
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: 'John',
      email: 'john@doe.com',
      pass: '123456789',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'John',
      email: 'john@smith.com',
      pass: '123456789',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'John',
      email: 'john@stone.com',
      pass: '123456789',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};