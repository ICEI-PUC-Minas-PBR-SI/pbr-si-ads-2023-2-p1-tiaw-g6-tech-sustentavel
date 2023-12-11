

let formDoador = document.getElementById("formDoador");

formDoador.addEventListener("submit", function (event) {
    event.preventDefault();

    let descricao = document.getElementById("descricao");
    let link_foto = document.getElementById("link_foto");

    fetch("https://eco-tech.vercel.app/doador", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                "descricao": descricao.value,
                "foto": link_foto.value
            }
        )
    }).then(res => alert('Doador cadastrado com sucesso!'));
})
