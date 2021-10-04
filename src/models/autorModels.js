import { sequelize } from "../db/mysqlConnection";
import {Sequelize} from 'sequelize'

const Autor = sequelize.define("autores",{
  autorId:{
    type:Sequelize.STRING,
    primaryKey: true,
    autoIncrement: true,
    allowNull: true
  },
  nome: {
    type:Sequelize.STRING,
    allowNull: true
  },
  email: {
    type:Sequelize.STRING,
    allowNull: true
  },
  telefone: {
    type:Sequelize.STRING,
    allowNull: true
  }
},{undescored: true});


export { Autor }