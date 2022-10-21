// const {User}= require('./db/models');

// User.create({
//     name: 'Test',
//     email: 'test@gmail.com'
// }).then(console.log);

// User.findAll().then(console.log);
// User.findAll({attributes: {exclude: ["createdAt", "updatedAt"]}}).then(console.log);

const {Categories, sequelize} =require('./db/models');
const { QueryTypes } = require('sequelize');


// Categories.create({
//     categoriesName: 'milkProducts',
//     productId: await sequelize.query("SELECT id FROM 'Products' WHERE name LIKE 'cheese%", {type: QueryTypes.SELECT})
// }).then(console.log);

const product = sequelize.query("SELECT id FROM 'Products' WHERE name LIKE 'cheese%", {type: QueryTypes.SELECT});
