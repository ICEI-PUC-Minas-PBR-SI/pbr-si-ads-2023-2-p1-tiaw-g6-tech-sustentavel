// Js/script.js

var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");
var body = document.querySelector("body");

btnSignin.addEventListener("click", function () {
    body.classList.remove("sign-up-js");
    body.classList.add("sign-in-js");
});

btnSignup.addEventListener("click", function () {
    body.classList.remove("sign-in-js");
    body.classList.add("sign-up-js");
});

// Adiciona um event listener para o botão de criar conta
document.getElementById("btnCriarConta").addEventListener("click", function (event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Obtém os valores dos campos do formulário
    var nome = document.getElementById("nomeCriar").value;
    var email = document.getElementById("emailCriar").value;
    var senha = document.getElementById("senhaCriar").value;

    // Verifica se algum campo está vazio
    if (nome === "" || email === "" || senha === "") {
        // Exibe uma mensagem de erro se algum campo estiver vazio
        alert("Por favor, preencha todos os campos.");
    } else {
        // Obtém as contas existentes do localStorage
        var contas = JSON.parse(localStorage.getItem("contas")) || [];

        // Verifica se o email já está cadastrado
        var contaExistente = contas.find(function (conta) {
            return conta.email === email;
        });

        if (contaExistente) {
            // Exibe uma mensagem de erro se a conta já existir
            alert("Esta conta já está cadastrada.");
        } else {
            // Adiciona a nova conta à lista
            contas.push({ nome: nome, email: email, senha: senha });

            // Armazena a lista atualizada no localStorage
            localStorage.setItem("contas", JSON.stringify(contas));

            // Limpa os campos do formulário
            document.getElementById("nomeCriar").value = "";
            document.getElementById("emailCriar").value = "";
            document.getElementById("senhaCriar").value = "";

            // Exibe uma mensagem de sucesso e sai da função
            alert("Conta criada com sucesso!");
        }
    }
});

// Adiciona um event listener para o botão de entrar
document.getElementById("btnEntrar").addEventListener("click", function (event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Obtém os valores dos campos do formulário de login
    var emailLogin = document.getElementById("emailLogin").value;
    var senhaLogin = document.getElementById("senhaLogin").value;

    // Obtém as contas do localStorage
    var contas = JSON.parse(localStorage.getItem("contas")) || [];

    // Verifica se a conta existe
    var contaExistente = contas.find(function (conta) {
        return conta.email === emailLogin && conta.senha === senhaLogin;
    });

    if (contaExistente) {
        // Exibe uma mensagem de sucesso
        alert("Login efetuado com sucesso!");

        // Redireciona para a página index.html
        window.location.href = "index.html";
    } else {
        // Exibe uma mensagem de erro se as credenciais estiverem incorretas
        alert("Credenciais incorretas. Por favor, verifique seu email e senha.");

        // Limpa os campos do formulário de login
        document.getElementById("emailLogin").value = "";
        document.getElementById("senhaLogin").value = "";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Evento de envio do formulário no modal de cadastro de produtos
    document.getElementById("formCadastroProdutoModal").addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o comportamento padrão do formulário

        // Obtém os valores dos campos do formulário no modal
        var nomeProdutoModal = document.getElementById("nomeProdutoModal").value;
        var descricaoProdutoModal = document.getElementById("descricaoProdutoModal").value;
        var precoProdutoModal = document.getElementById("precoProdutoModal").value;

        // Cria um objeto com os dados do produto
        var novoProduto = {
            nome: nomeProdutoModal,
            descricao: descricaoProdutoModal,
            preco: parseFloat(precoProdutoModal)
        };

        // Envia os dados para o backend (utilize a rota correta)
        fetch('/produtos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoProduto)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Resposta do backend:', data);

            // Limpa os campos do formulário no modal após o cadastro
            document.getElementById("formCadastroProdutoModal").reset();

            // Fecha o modal após o cadastro
            var cadastroProdutoModal = new bootstrap.Modal(document.getElementById("cadastroProdutoModal"));
            cadastroProdutoModal.hide();
        })
        .catch(error => {
            console.error('Erro ao enviar dados para o backend:', error);
            // Adicione aqui a lógica para lidar com o erro, se necessário
        });
    });
});

