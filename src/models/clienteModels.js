import {sequelize} from '../db/mysqlConnection.js'
import {Sequelize} from 'sequelize'

const Cliente = sequelize.define("clientes",{
  clienteId:{
    type: Sequelize.STRING,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull: false
  }
},{ underscored: true});

export {Cliente}