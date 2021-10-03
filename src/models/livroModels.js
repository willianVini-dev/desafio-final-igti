import { sequelize } from "../db/mysqlConnection";
import { Autor } from "./autorModels.js"

const Livro = sequelize.define("livros",{
  livroId:{
    type: sequelize.STRING,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  nome: {
    type: sequelize.STRING,
    allowNull: false
  },
  valor: {
    type: sequelize.DOUBLE,
    allowNull: false
  },
   estoque: {
    type: sequelize.INTEGER,
    allowNull: false
  },
  nome: {
    type: sequelize.STRING,
    allowNull: false
  },
}, {underscored: true}); 

Livro.belongsTo(Autor,{foreignKey: "autorId"});