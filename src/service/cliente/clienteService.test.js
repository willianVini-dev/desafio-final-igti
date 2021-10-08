import { ClienteService } from "./clienteService"
describe("Testes clientes",()=>{

  test.skip("Deve ser possivel cadastrar um novo cliente",  async ()=>{
    const novoCliente ={
      nome: "primeiro cliente",
      email: "teste@hotmail.com",
      senha: "0987654",
      telefone: "123456789",
      endereco: "rua gaturamo"
    }
    const res = await ClienteService.criarCliente(novoCliente);
    expect(res).toHaveProperty("clienteId");
  });

  test.skip("Deve ser possivel atualizar um cliente", async ()=>{

    const novoCliente ={
      clienteId: 7,
      nome: "segundo cliente",
      email: "testeteste@hotmail.com",
      senha: "09876549999",
      telefone: "123459",
      endereco: "rua corina gaturamo"
    }
    const res = await ClienteService.atualizarCliente(novoCliente);
    expect(res.dataValues).toEqual(novoCliente);

  });

  test.skip("Deve ser possivel excluir um cliente", async()=>{

    const cliente_id = 7;
    const res = await ClienteService.excluir(cliente_id);
    expect(res.length).toBe(0)
    
  });

  test.skip("Deve retornar todos os clientes, com todas as informações exceto o campo de senha, que não deve ser retornado", async()=>{

    const res = await ClienteService.buscarTodos();
    expect(res[0]).not.toHaveProperty("senha");
    expect(res[0]).toHaveProperty("nome");
    expect(res[0]).toHaveProperty("email");
    expect(res[0]).toHaveProperty("telefone");
    expect(res[0]).toHaveProperty("endereco");
  });

  test.skip("Deve retornar um cliente, com todas as informações exceto o campo de senha, que não deve ser retornado", async()=>{
    const id = 8;
    const res = await ClienteService.buscarCliente(id);
    expect(res).not.toHaveProperty("senha");
    expect(res).toHaveProperty("nome");
    expect(res).toHaveProperty("email");
    expect(res).toHaveProperty("telefone");
    expect(res).toHaveProperty("endereco");
  });

});