function carregarProdutos() {


    fetch('http://localhost:5000/produtos')
    .then(response => response.json())
    .then(produtos => {
        // Processa cada produto e adiciona ao HTML da página
        produtos.forEach(produto => {
            const produtoHtml = `
                <div class="product-card">
                    <h2>${produto.descricao_produto}</h2>
                    <p>Descrição do ${produto.descricao_produto}</p>
                    <p>Vendedor: ${produto.vendedor}</p>
                    <img src="${produto.url_img_produto}" alt="Imagem do Produto">
                    <p>Preço: ${produto.preco}</p>
                    <div>
                        Avaliação:
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                    </div>
                </div>`;
            document.getElementById('produtosContainer').innerHTML += produtoHtml;
        });
    })
    .catch(error => console.error('Erro ao buscar produtos:', error));
}

// Chamada da função quando a janela carrega
window.onload = carregarProdutos;