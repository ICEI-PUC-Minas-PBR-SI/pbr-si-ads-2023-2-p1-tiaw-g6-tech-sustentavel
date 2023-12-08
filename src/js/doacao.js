let formDoacao = document.getElementById("formDoacao");

formDoacao.addEventListener("submit", function (event) {
    event.preventDefault();
    
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let telefone = document.getElementById("telefone");

    if (nome.value == "" || email.value == "" || telefone.value == "") {
        alert("Preencha os campos!")
    } else {
        fetch("http://localhost:5000/doacao", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "nome": nome.value,
                    "email": email.value,
                    "telefone": telefone.value
                }
            )
        }).then(res => alert('Doação cadastrada com sucesso!'));
    }
});
