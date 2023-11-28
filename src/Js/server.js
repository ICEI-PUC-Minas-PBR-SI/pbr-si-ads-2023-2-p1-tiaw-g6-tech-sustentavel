const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Rota para obter todos os produtos
app.get('/produtos', (req, res) => {
  const produtos = JSON.parse(fs.readFileSync('./Json/produtos.json'));
  res.json(produtos);
});

// Rota para adicionar um novo produto
app.post('/produtos', (req, res) => {
  const produtos = JSON.parse(fs.readFileSync('./Json/produtos.json'));
  const novoProduto = req.body;
  novoProduto.id = Date.now(); // Atribuir um ID único ao novo produto
  produtos.push(novoProduto);
  fs.writeFileSync('./Json/produtos.json', JSON.stringify(produtos, null, 2));
  res.json({ message: 'Produto adicionado com sucesso!', produto: novoProduto });
});

// Rota para atualizar um produto existente
app.put('/produtos/:id', (req, res) => {
  const produtos = JSON.parse(fs.readFileSync('./Json/produtos.json'));
  const produtoId = parseInt(req.params.id);
  const novoProduto = req.body;
  
  const produtoIndex = produtos.findIndex((produto) => produto.id === produtoId);
  
  if (produtoIndex !== -1) {
    produtos[produtoIndex] = { ...produtos[produtoIndex], ...novoProduto };
    fs.writeFileSync('./Json/produtos.json', JSON.stringify(produtos, null, 2));
    res.json({ message: 'Produto atualizado com sucesso!', produto: produtos[produtoIndex] });
  } else {
    res.status(404).json({ message: 'Produto não encontrado.' });
  }
});

// Rota para excluir um produto
app.delete('/produtos/:id', (req, res) => {
  const produtos = JSON.parse(fs.readFileSync('./Json/produtos.json'));
  const produtoId = parseInt(req.params.id);
  
  const produtoIndex = produtos.findIndex((produto) => produto.id === produtoId);
  
  if (produtoIndex !== -1) {
    const produtoExcluido = produtos.splice(produtoIndex, 1)[0];
    fs.writeFileSync('./Json/produtos.json', JSON.stringify(produtos, null, 2));
    res.json({ message: 'Produto excluído com sucesso!', produto: produtoExcluido });
  } else {
    res.status(404).json({ message: 'Produto não encontrado.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
