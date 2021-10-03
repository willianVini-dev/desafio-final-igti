import { sequelize } from "../db/mysqlConnection";

const Autor = sequelize.define("autores",{
  autorId:{
    type:sequelize.STRING,
    primaryKey: true,
    autoIncrement: true,
    allowNull: true
  },
  nome: {
    type:sequelize.STRING,
    allowNull: true
  },
  email: {
    type:sequelize.STRING,
    allowNull: true
  },
  telefone: {
    type:sequelize.STRING,
    allowNull: true
  }
},{undescored: true});


export { Autor }