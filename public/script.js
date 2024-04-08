const toggleModeButton = document.getElementById('toggleMode');

toggleModeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode'); // Alterna entre los estilos claro y oscuro en el cuerpo del documento
});
