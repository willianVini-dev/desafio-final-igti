import {Cliente} from "../models/clienteModels"
import {sequelize} from '../db/mysqlConnection.js'

const ClienteRepository = {
  criar: async (cliente)=>{
    try {
      return await Cliente.create(cliente);
    } catch (err) {
      throw new Error(err)
    }finally {
      sequelize.close();
    }
  },
  buscarUm: async (id)=>{
    try{
      return await Cliente.findOne({where:{cliente_id: id}})
    }catch(err){
      throw new Error(err)
    }finally{
      sequelize.close();
    }
  },
  atualizarCliente: async (id,novoCliente)=>{
    try {
      return await Cliente.update(novoCliente,{where:{cliente_id: id}})
    } catch (err) {
      console.log(err)
      throw new Error(err)
    }finally{
      sequelize.close();
    }
  },
  excluir: async(id)=>{
    try{
      return await Cliente.destroy({where:{cliente_id:id}});
    }catch(err){
      console.log(err)
      throw new Error(err);
    }finally{
      //sequelize.close();
    }
  },

  buscarTodos: async()=>{
    try { 
      return await Cliente.findAll();
    } catch (err) {
      throw new Error(err)
    }
  }

}

export { ClienteRepository }