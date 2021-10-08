import { TestWatcher } from "@jest/core";
import {LivroService} from "./livroService"

describe("Testes livro",() =>{
  test.skip("Deve ser possivel adicionar um livro", async ()=>{

    const infoLivro = {
      descricao: "Descricao do livro",
      paginas: 250,
      editora: "Nome da editora",
      avalicoes: [
        {
          nome: "alexandre",
          nota: 5,
          avaliacao: "Descricao da avaliacao"
        }
      ]
    }

    const novoLivro = {
      nome : "O primeiro livro feito",
      valor: 250,
      estoque: 30,
      autorId : 2
    }
    const res = await LivroService.criar(novoLivro,infoLivro);
    expect(res).toHaveProperty("livroId");

  });

  test.skip("Deve ser possivel alterar somente o valor", async ()=>{
    
    const info = {
      valor: 10,
      id: 2
    }
    const res = await LivroService.atualizarVenda(info);
    expect(res.valor).toBe(info.valor);
  });

  test.skip("Deve ser possivel excluir um livro", async ()=>{
    const id = 1;
    const res = await LivroService.excluir(id);
    expect(res).toBe(null)
  });

  test.skip("Deve ser possivel pesquisar as informações do livro", async ()=>{
    const res = await LivroService.info(2);
    expect(res).toHaveProperty("descricao");
  });

})