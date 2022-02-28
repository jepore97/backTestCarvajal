'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [{
      price:2100,
      name: 'Cocacola',
      image: 'https://loremflickr.com/320/240/product',
      description:'',
      stock:12,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      price:2800,
      name: 'Fanta',
      image: 'https://loremflickr.com/320/240/cat',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      stock:40,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      price:1100,
      name: 'Sprite',
      image: 'https://loremflickr.com/320/240/animals',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      stock:0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      price:3000,
      name: 'Cocacola',
      image: 'https://loremflickr.com/320/240/tree',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      stock:40,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      price:2000,
      name: 'Cocacola',
      image: 'https://loremflickr.com/320/240/car',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      stock:50,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      price:2500,
      name: 'Cocacola',
      image: 'https://loremflickr.com/320/240/product',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      stock:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },  
  ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};
