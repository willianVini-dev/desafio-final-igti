import { sequelize } from "../db/mysqlConnection";
import { Cliente } from "./clienteModels";
import { Livro } from "./livroModels";
import {Sequelize} from 'sequelize'

const Venda = sequelize.define("vendas",{
  vendaId:{
    type: Sequelize.STRING,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  data:{
    type: new Date(),
    allowNull: false
  }
},{underscored: true});

Venda.belongsTo(Cliente, {foreignKey: "clienteId"});
Venda.belongsTo(Livro, {foreignKey: "livroId"});


export { Venda }