
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('users', 'id', {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        }, { transaction: t }),
        queryInterface.addColumn('users', 'name', {
          type: Sequelize.STRING
        }, { transaction: t }),
        queryInterface.addColumn('users', 'email', {
          type: Sequelize.STRING,
          allowNull: true,
        }, { transaction: t }),
        queryInterface.addColumn('users', 'pass', {
          type: Sequelize.STRING,
          allowNull: true,
        }, { transaction: t }),
        queryInterface.addColumn('users', 'createdAt', {
          allowNull: false,
          type: Sequelize.DATE
        }, { transaction: t }),
        queryInterface.addColumn('users', 'updateAt', {
          allowNull: false,
          type: Sequelize.DATE
        }, { transaction: t }),
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('users', 'id', { transaction: t }),
      queryInterface.removeColumn('users', 'name', { transaction: t }),
      queryInterface.removeColumn('users', 'email', { transaction: t }),
      queryInterface.removeColumn('users', 'pass', { transaction: t }),
      queryInterface.removeColumn('users', 'createdAt', { transaction: t }),
      queryInterface.removeColumn('users', 'updateAt', { transaction: t })
      ]);
    });
  },
 
};
