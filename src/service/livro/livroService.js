import { Livro } from "../../models/livroModels";
import { LivroRepository } from "../../repository/livroRepository";
import {VendaRepository} from "../../repository/vendaRepository.js"

const LivroService ={
  criar: async(novoLivro, infoLivro)=>{
     return await LivroRepository.criar(novoLivro,infoLivro);
  },
  atualizarVenda: async(info)=>{
    return LivroRepository.atualizarVenda(info);
  },
  excluir: async (id)=>{

    const existe = await VendaRepository.vendaLivro(id);
    if(existe)
      throw new Error("existe venda com esse livro");

    await LivroRepository.delete(id);
    return await LivroRepository.buscarLivroId(id);
  },
  buscarLivroId: async(id)=>{
    return await LivroRepository.buscarLivroId(id);
  },
  info: async (id)=>{
    return await LivroRepository.info(id)
  }
}
export {LivroService}