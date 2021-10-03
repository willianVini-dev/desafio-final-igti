import { sequelize } from "../db/mysqlConnection";
import { Cliente } from "./clienteModels";
import { Livro } from "./livroModels";
import { Autor } from "./autorModels";

const Venda = sequelize.define("vendas",{
  vandaId:{
    type: sequelize.STRING,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  data:{
    type: new Date(),
    allowNull: false
  }
});

Venda.belongsTo(Cliente, {foreignKey: "clienteId"});
Venda.belongsTo(Livro, {foreignKey: "livroId"});
Venda.belongsTo(Autor, {foreignKey: "autorId"});

export { Venda }