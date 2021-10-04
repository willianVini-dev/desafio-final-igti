import { sequelize } from "../db/mysqlConnection";
import { Autor } from "./autorModels.js"
import {Sequelize} from 'sequelize'

const Livro = sequelize.define("livros",{
  livroId:{
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  valor: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
   estoque: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, {underscored: true}); 

Livro.belongsTo(Autor,{foreignKey: "autorId"});


export {Livro};