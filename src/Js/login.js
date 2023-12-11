// Animação dos formulários de login e cadastro
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

// Redirecionar se estiver logado
window.addEventListener('load', function() {
    if (localStorage.getItem('id')) {
        window.location = 'index.html'
        return
    }
})

// Evento de envio do formulário de criar conta
document.getElementById("formCriarConta").addEventListener("submit", function (event) {
    // Impedir o comportamento padrão do formulário
    event.preventDefault()
    
    // Obter os valores dos campos do formulário no modal
    var nomeUsuario = document.getElementById("nomeCriar").value;
    var emailUsuario = document.getElementById("emailCriar").value;
    var senhaUsuario = document.getElementById("senhaCriar").value;

    // Validar se os campos estão preenchidos
    if (!nomeUsuario || !emailUsuario || !senhaUsuario) {
        alert('Por favor, preencha todos os campos.')
        return
    }

    // Cadastra usuário no banco
    fetch('https://eco-tech.vercel.app/register', {
        method: 'POST',
        body: JSON.stringify({
            email: emailUsuario,
            password: senhaUsuario,
            nome: nomeUsuario
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (dadosUsuario) {
                    // Salvar usuário logado
                    localStorage.setItem('id', dadosUsuario.user.id)
                    localStorage.setItem('username', dadosUsuario.user.nome)
                    localStorage.setItem('email', dadosUsuario.user.email)
                    alert('Parabéns! Sua conta foi criada com sucesso.')
                    window.location = 'index.html'
                })
                return;
            }
            response.json().then(function (mensagemErro) {
                switch(mensagemErro) {
                    case 'Password is too short':
                        alert('A sua senha deverá ter no mínimo 4 caractéres.')
                        break
                    case 'Email already exists':
                        alert('Seu e-mail já foi utilizado em outra conta.')
                        break
                    default:
                        alert('Falha ao criar conta. Tente novamente.')
                        break
                }
            })
        })
        .catch(function (error) {
            console.log(error)
            alert('Falha ao criar conta. Tente novamente.')
        })
})

// Evento de envio do formulário de login
document.getElementById("formFazerLogin").addEventListener("submit", function (event) {
    // Impedir o comportamento padrão do formulário
    event.preventDefault()
    
    // Obter os valores dos campos do formulário no modal
    var emailUsuario = document.getElementById("emailEntrar").value;
    var senhaUsuario = document.getElementById("senhaEntrar").value;

    // Validar se os campos estão preenchidos
    if (!emailUsuario || !senhaUsuario) {
        alert('Por favor, preencha todos os campos.')
        return
    }

    // Autentica usuário no banco
    fetch('https://eco-tech.vercel.app/login', {
        method: 'POST',
        body: JSON.stringify({
            email: emailUsuario,
            password: senhaUsuario
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            console.log(response)
            if (response.ok) {
                // Salvar usuário logado
                response.json().then(dadosUsuario => {
                    localStorage.setItem('id', dadosUsuario.user.id)
                    localStorage.setItem('username', dadosUsuario.user.nome)
                    localStorage.setItem('email', dadosUsuario.user.email)
                    localStorage.setItem('telefone', dadosUsuario.user.telefone || '')
                    localStorage.setItem('sobre_mim', dadosUsuario.user.sobre_mim || '')
                    localStorage.setItem('fotoPreview', dadosUsuario.user.fotoPreview || '')
                    window.location = 'index.html'
                })
                return;
            }
            response.json().then(function (mensagemErro) {
                switch(mensagemErro) {
                    case 'Cannot find user':
                    case 'Password is too short':
                    case 'Incorrect password':
                        alert('E-mail ou senha inválidos!')
                        break
                    default:
                        alert('Falha ao fazer login. Tente novamente.')
                        break
                }
            })
        })
        .catch(function (error) {
            console.log(error)
            alert('Falha ao fazer login. Tente novamente.')
        })
})
