import {AutorService} from "./autorService";
describe.skip("teste autor",()=>{
  test("Deve ser possivel cadastrar um autor", async ()=>{

    const novoAutor = {
      nome: "alexandre o grande",
      email: "testealexandre@hotmail.com",
      telefone: "9999-9999"
    }

    const res = await AutorService.criar(novoAutor);
    expect(res).toHaveProperty("autorId")
  });
  test("Dese ser possivel atualizar um autor", async()=>{
    
    const novoAutor ={
      autorId : 1,
      nome: "alexandre o pequenino",
      email: "teste@hotmail.com",
      telefone: "1234557890"
    }

    const res = await AutorService.atualizarAutor(novoAutor);
    expect(res.dataValues).toEqual(novoAutor);
  });

  test("Deve ser possivel excluir um autor", async()=>{
    const id = 1;
    const res = await AutorService.exluir(id)
    expect(res.length).toBe(0);
  });

  test("deve ser possivel pesquisar todos os autores", async()=>{

    const res = await AutorService.buscarTodos();
    expect(res).not.toBeNull();
  });

  test("Dese ver possivel buscar autor com id especifico", async()=>{
    const res = await AutorService.buscarAutor(3);
    expect(res.autorId).toBe(3)
  })
});