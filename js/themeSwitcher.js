// Obtén el elemento del checkbox por su atributo 'role'
var checkbox = document.querySelector('input[role="switch"]');

// Agrega un evento de cambio al checkbox
checkbox.addEventListener('change', function() {
    // Verifica si el checkbox está marcado
    if (checkbox.checked) {
      document.documentElement.setAttribute('data-bs-theme','dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme','light')
    }
});