// This file is intentionally left blank.

// Utilitários para manipulação do localStorage
function salvarDados(chave, dados) {
  localStorage.setItem(chave, JSON.stringify(dados));
}

function obterDados(chave) {
  const dados = localStorage.getItem(chave);
  return dados ? JSON.parse(dados) : [];
}

// Gera um ID único simples
function gerarId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

// Cadastro de Consumidor
function cadastrarConsumidor({ nome, cpf, endereco, telefone, email, senha }) {
  const consumidores = obterDados("consumidores");
  consumidores.push({
    id: gerarId(),
    nome,
    cpf,
    endereco,
    telefone,
    email,
    senha,
  });
  salvarDados("consumidores", consumidores);
}

// Cadastro de Vendedor
function cadastrarVendedor({
  nome,
  cpf,
  endereco,
  telefone,
  email,
  senha,
  banco,
  agencia,
  conta,
}) {
  const vendedores = obterDados("vendedores");
  vendedores.push({
    id: gerarId(),
    nome,
    cpf,
    endereco,
    telefone,
    email,
    senha,
    banco,
    agencia,
    conta,
  });
  salvarDados("vendedores", vendedores);
}

// Cadastro de Produto (inclusão)
function cadastrarProduto(
  { foto, nome, descricao, preco, prazo },
  vendedorCpf
) {
  const produtos = obterDados("produtos");
  produtos.push({
    id: gerarId(),
    foto,
    nome,
    descricao,
    preco,
    prazo,
    vendedorCpf,
  });
  salvarDados("produtos", produtos);
}

// Alteração de Produto
function alterarProduto(produtoId, novosDados) {
  const produtos = obterDados("produtos");
  const index = produtos.findIndex((p) => p.id === produtoId);
  if (index !== -1) {
    produtos[index] = { ...produtos[index], ...novosDados };
    salvarDados("produtos", produtos);
  }
}

// Exclusão de Produto
function excluirProduto(produtoId) {
  let produtos = obterDados("produtos");
  produtos = produtos.filter((p) => p.id !== produtoId);
  salvarDados("produtos", produtos);
}
