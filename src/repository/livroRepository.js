import {Livro} from "../models/livroModels"
import {mongodbConexao} from "../db/mongoDb"

const LivroRepository = {
  buscaLivroPorAutor: async (id)=>{
   try {
    return await Livro.findOne({where:{autor_id:id}})
   } catch (err) {
    throw new Error(err)
   }
  },
  criar: async (novoLivro, infoLivro) =>{
    const mongo = mongodbConexao();
    try {
      const res = await Livro.create(novoLivro);
      infoLivro.livroId = res.livroId;

      await mongo.connect();
      await mongo.db("desafio-final").collection("livroInfo").insertOne(infoLivro);
      return res;
    } catch (err) {
      throw new Error(err)
    }
  },
  atualizarVenda: async(infoLivro)=>{
    try {
      await Livro.update({valor: infoLivro.valor}, {where:{livroId: infoLivro.id}});
      return LivroRepository.buscarLivroId(infoLivro.id);
    } catch (err) {
      throw new Error(err)
    }
  },
  buscarLivroId: async(id)=>{
    return await Livro.findOne({where:{livroId:id}});
  },
  delete: async(id)=>{
    try {
      return await Livro.destroy({where:{livroId:id}});
    } catch (err) {
      throw new Error(err)
    }
  },
  info: async(id)=>{
    try {
    
      const mongo = mongodbConexao();
      await mongo.connect();
      const res = await mongo.db("desafio-final").collection("livroInfo").findOne({livroId:id});
      const Info = await Livro.findOne({where:{livroId:id}});
      const livroInfo = {
        nome: Info.nome,
        valor:Info.valor,
        estoque: Info.estoque,
        autorId: Info.autorId,
        info: res,
      }
      return livroInfo;
  
    }catch(err){
      throw new Error(err)
    }
  } 
}
export { LivroRepository }