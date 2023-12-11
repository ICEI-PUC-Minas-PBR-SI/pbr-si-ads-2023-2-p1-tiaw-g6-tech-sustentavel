// Esconde menu se usuário logado ou não
window.addEventListener('load', function () {
  const userId = localStorage.getItem('id')
  if (userId) {
    // Oculta o menu login
    document.getElementById('menuLogin').classList.add('d-none')
  } else {
    // Oculta foto de perfil
    document.getElementById('menuPerfil').classList.add('d-none')
  }
})
