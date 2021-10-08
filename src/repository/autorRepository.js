import {Autor} from "../models/autorModels";

const AutorRepository = {
  criar: async(autor)=>{
    try {
      return await Autor.create(autor)
    } catch (err) {
      throw new Error(err)
    }
  },
  buscarAutor: async (id)=>{
   try {
    return await Autor.findOne({where:{autor_id:id}})
   } catch (err) {
     throw new Error(err)
   }
  },
  atualizarAutor: async(novoAutor)=>{

    return await Autor.update({
      nome: novoAutor.nome,
      email: novoAutor.email,
      telefone: novoAutor.telefone
    },{
      where:{
        autor_id: novoAutor.autorId
      }
    });

  },
  excluir: async(id)=>{
    try{
      return await Autor.destroy({where:{autor_id:id}})
    }catch(err){
      throw new Error(err)
    }
  },
  buscarTodos: async()=>{
    try{
      return await Autor.findAll();
    }catch(err){
      throw new Error(err)
    }
  }

}

export { AutorRepository }