import { Livro } from "../../models/livroModels";
import {AutorRepository} from "../../repository/autorRepository"
import {LivroRepository} from "../../repository/livroRepository"

const AutorService = {
  criar: async (autor)=>{
    return await AutorRepository.criar(autor);
  },
  atualizarAutor: async(novoAutor)=>{
    const existe = await AutorService.buscarAutor(novoAutor.autorId);
    if(!existe)
      throw new Error("autor não existe")

    await AutorRepository.atualizarAutor(novoAutor)
    return await AutorRepository.buscarAutor(novoAutor.autorId);
  },
  buscarAutor: async(id)=>{
    return await AutorRepository.buscarAutor(id);
  },
  exluir: async(id)=>{
    const existe = await LivroRepository.buscaLivroPorAutor(id);
    if(existe)
      throw new Error("existe liro vinculado a este autor");
    
    await AutorRepository.excluir(id);
    return []; 
  },
  buscarTodos: async()=>{
    return await AutorRepository.buscarTodos();
  }
}
export {AutorService} 