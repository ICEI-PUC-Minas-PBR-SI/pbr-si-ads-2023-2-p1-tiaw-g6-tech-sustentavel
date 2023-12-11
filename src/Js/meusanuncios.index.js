function carregaAnuncios(){
    // Redirecionar se não estiver logado
    const userId = localStorage.getItem('id')
    if (!userId) {
        window.location = 'tela-login.html'
        return
    }
    document.getElementById('produtosFinalizadosContainer').innerHTML = ''
    document.getElementById('produtosPublicosContainer').innerHTML = ''
    // Carrega anuncios do usuario
    fetch(`https://eco-tech.vercel.app/produtos?userId=${userId}`)
        .then(response => response.json())
        .then(produtos => {
            // Processa cada produto e adiciona ao HTML da páginas
            produtos.forEach(function (produto) {
                if (produto.finalizado) {
                    const produtoHtml = `
                    <div class="card" style="width: 18rem; margin-top: 25px;">
                        <img src="${produto.url_img_produto}" class="card-img-top" alt="laptop aberto">
                        <div class="card-body">
                            <h5 class="card-title">${produto.nome_produto}</h5>
                            <p class="card-text">${produto.descricao_produto}</p>
                            <p class="card-location">R$ ${produto.preco.toString().replace('.', ',')}</p>
                            <p>${produto.dataCriacao}</p>
                        </div>
                    </div>`;
                    document.getElementById('produtosFinalizadosContainer').innerHTML += produtoHtml;
                } else {
                    const produtoHtml = `
                    <div class="card" style="width: 18rem;">
                        <img src="${produto.url_img_produto}" class="card-img-top" alt="laptop aberto">
                        <div class="card-body">
                            <h5 class="card-title">${produto.nome_produto}</h5>
                            <p class="card-text">${produto.descricao_produto}</p>
                            <p class="card-location">R$ ${produto.preco.toString().replace('.', ',')}</p>
                            <p>${produto.dataCriacao}</p>
                            <button class="btn btn-primary" onclick="finalizarProduto(${produto.id})">Finalizar</button>
                        </div>
                    </div>`
                    document.getElementById('produtosPublicosContainer').innerHTML += produtoHtml;
                }
            })
        })
        .catch(error => console.error('Erro ao buscar produtos:', error));
}

// Chamada da função quando a janela carrega
window.onload = carregaAnuncios;

function finalizarProduto (idProduto) {
    fetch(`https://eco-tech.vercel.app/produtos/${idProduto}`, {
        method: 'PATCH',
        body: JSON.stringify({
            finalizado: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(function () {
            alert('Produto finalizado com sucesso!')
            carregaAnuncios()
        })
        .catch(error => alert('Falha ao atualizar o produto. Tente novamente.'))
}

// Cadastro de produtos
document.addEventListener("DOMContentLoaded", function () {
    // Evento de envio do formulário no modal
    document.getElementById("formCadastroProdutoModal").addEventListener("submit", function (event) {
        // Impedir o comportamento padrão do formulário
        event.preventDefault();

        // Obter os valores dos campos do formulário no modal
        var nomeProdutoModal = document.getElementById("nomeProdutoModal").value;
        var descricaoProdutoModal = document.getElementById("descricaoProdutoModal").value;
        var precoProdutoModal = document.getElementById("precoProdutoModal").value;
        var imagemProdutoModal = document.getElementById("imagemProdutoModal").value;

        // Validar se os campos estão preenchidos
        if (nomeProdutoModal && descricaoProdutoModal && precoProdutoModal && imagemProdutoModal) {
            // Cadastrar produto na api
            const hoje = new Date()
            fetch('https://eco-tech.vercel.app/produtos', {
                method: 'POST',
                body: JSON.stringify({
                    nome_produto: nomeProdutoModal,
                    descricao_produto: descricaoProdutoModal,
                    vendedor: localStorage.getItem('username'),
                    url_img_produto: imagemProdutoModal,
                    preco: precoProdutoModal,
                    userId: localStorage.getItem('id'),
                    finalizado: false,
                    dataCriacao: `${hoje.getDate()}/${hoje.getMonth() + 1}/${hoje.getFullYear()}`
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(function () {
                    carregaAnuncios()
                    alert('Produto cadastrado com sucesso!')

                    // Limpar os campos do formulário no modal após o cadastro
                    document.getElementById("formCadastroProdutoModal").reset();

                    // Fechar o modal após o cadastro
                    var cadastroProdutoModal = new bootstrap.Modal(document.getElementById("cadastroProdutoModal"));
                    cadastroProdutoModal.hide();
                })
                .catch(error => alert('Falha ao cadastrar produto. Tente novamente.'))
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });
});