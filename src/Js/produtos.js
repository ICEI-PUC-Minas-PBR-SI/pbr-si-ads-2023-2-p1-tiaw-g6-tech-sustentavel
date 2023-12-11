function carregarProdutos() {
    const urlParams = new URLSearchParams(window.location.search)
    const pesquisa = urlParams.get("s")
    const urlServico = pesquisa ? `&q=${pesquisa}` : "";
    fetch(`https://pbr-si-ads-2023-2-p1-tiaw-g6-tech-sustentavel-stw1.vercel.app/produtos`)
        .then(response => response.json())
        .then(produtos => {
            if (produtos.length == 0) {
                alert("Não encontrado! Tente outro termo.");
                window.location = "produtos.html";
                return;
            }
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
