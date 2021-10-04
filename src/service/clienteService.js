import { Cliente } from "../models/clienteModels.js";
import {ClienteRepository} from "../repository/clienteRepository.js"
import {VendaRepository} from "../repository/vendaRepository.js"

const ClienteService = {

  criarCliente: async (cliente)=>{
    const novoCliente = ClienteRepository.criar(cliente)

    return novoCliente;
  },

  atualizarCliente: async (novoCliente)=>{
    const existeCliente = await ClienteService.buscarUm(novoCliente.clienteId);

    if(!existeCliente)
      return [];

    const cliente ={
      nome: novoCliente.nome,
      email: novoCliente.email,
      senha: novoCliente.senha,
      telefone: novoCliente.telefone,
      endereco: novoCliente.endereco,
    }
    await ClienteRepository.atualizarCliente(novoCliente.clienteId,cliente);

    return await ClienteService.buscarUm(novoCliente.clienteId);

  },
  
  buscarUm: async (id)=>{
    const res = await ClienteRepository.buscarUm(id);
    return res;
  },

  excluir: async (id)=>{

    const vendaCliente = await VendaRepository.vendasPorCliente(id);
    if(vendaCliente)
      throw new Error("existe uma venda cadastrada com esse cliente")

    await ClienteRepository.excluir(id);
    const existe = await ClienteService.buscarUm(id);
    if(!existe){
      return [];
    }
  },
  buscarTodos: async()=>{

    let array = [];
    const res = await ClienteRepository.buscarTodos();
    res.map((i)=>{
      const info = {
        nome: i.nome,
        email: i.email,
        telefone: i.telefone,
        endereco: i.endereco
      }
    array.push(info)      
    });
    return array;    
  },

  buscarCliente: async (id)=>{
    const res = await ClienteRepository.buscarUm(id);
    let info = {
      nome: res.nome,
      email: res.email,
      telefone: res.telefone,
      endereco: res.endereco,
    };
    return info;
    }
  }
export { ClienteService }