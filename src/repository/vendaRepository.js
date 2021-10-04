import {Venda} from "../models/vendaModels.js"
import {sequelize} from '../db/mysqlConnection.js'

const VendaRepository ={

  vendasPorCliente: async (id)=>{
    console.log(id)
    try {
      return Venda.findOne({where:{venda_id:id}})
    } catch (err) {
      throw new Error(err);
    }finally{
      //sequelize.close();
    }
  }
}

export {VendaRepository}