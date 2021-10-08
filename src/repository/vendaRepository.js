import {Venda} from "../models/vendaModels"

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
  },
  vendaLivro: async(id)=>{
    try {
      return await Venda.findOne({where:{livroId:id}});
    } catch (err) {
      throw new Error(err)
    }
  }
}

export {VendaRepository}