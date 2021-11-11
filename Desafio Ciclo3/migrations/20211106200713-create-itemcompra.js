'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ItemCompras', {
      
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantidade: {
        type: Sequelize.INTEGER
      },
      valor: {
        type: Sequelize.FLOAT
      },
      CompraId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references : {
          model : 'Compras',
          key : 'id'
        },
        onDelete : 'CASCADE',
        onUpdate : 'CASCADE'
      },
      ProdutoId : {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references : {
          model : 'Produtos',
          key : 'id'
        },
        onDelete : 'CASCADE',
        onUpdate : 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ItemCompras');
  }
};