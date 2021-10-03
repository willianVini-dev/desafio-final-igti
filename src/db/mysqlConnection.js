import Sequelize from 'sequelize';
const sequelize = new Sequelize(process.env.DATA_BASE, 'root', '', {
  host: 'localhost',
  dialect: 'mysql'

});

export {sequelize}