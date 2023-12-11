document.addEventListener('DOMContentLoaded', function() {
    // Redirecionar se não estiver logado
    if (!localStorage.getItem('id')) {
        window.location = 'tela-login.html'
        return
    }
    
    var username = localStorage.getItem('username');
    var email = localStorage.getItem('email');
    var telefone = localStorage.getItem('telefone');
    var sobre_mim = localStorage.getItem('sobre_mim');
    var fotoPreview = localStorage.getItem('fotoPreview');
    if (fotoPreview !== null) {
        document.getElementById('previewFoto').src = fotoPreview;
        document.getElementById('previewFoto').style.display = 'block';
    }

    if (username !== null) {
        document.getElementById('username').value = username;
    }

    if (email !== null) {
        document.getElementById('email').value = email;
    }

    if (telefone !== null) {
        document.getElementById('telefone').value = telefone;
    }

    if (sobre_mim !== null) {
        document.getElementById('sobre_mim').value = sobre_mim;
    }
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var sobre_mim = document.getElementById('sobre_mim').value;
    

   
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('telefone', telefone);
    localStorage.setItem('sobre_mim', sobre_mim);

 
    console.log('Nome de Usuário: ' + localStorage.getItem('username'));
    console.log('Email: ' + localStorage.getItem('email'));
    console.log('Telefone: ' + localStorage.getItem('telefone'));
    console.log('Sobre Mim: ' + localStorage.getItem('sobre_mim'));

    var fotoInput = document.getElementById('foto');
    if (fotoInput.files.length > 0) {
        var fotoFile = fotoInput.files[0];
        var reader = new FileReader();

        reader.onload = function(e) {
            var fotoPreview = e.target.result;
            localStorage.setItem('fotoPreview', fotoPreview);
            document.getElementById('previewFoto').src = fotoPreview;
            document.getElementById('previewFoto').style.display = 'block';
        };

        reader.readAsDataURL(fotoFile);
    }
});

// Desloga o usuário
document.getElementById('botaoSair').addEventListener('click', function () {
    localStorage.clear()
    window.location = "index.html"
})
