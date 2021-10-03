import {sequelize} from '../db/mysqlConnection.js'

const Cliente = sequelize.define("clientes",{
  clienteId:{
    type: sequelize.STRING,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nome: {
    type: sequelize.STRING,
    allowNull: false
  },
  email: {
    type: sequelize.STRING,
    allowNull: false
  },
  senha: {
    type: sequelize.STRING,
    allowNull: false
  },
  telefone: {
    type: sequelize.STRING,
    allowNull: false
  },
  endereco: {
    type: sequelize.STRING,
    allowNull: false
  }
});

export {Cliente}