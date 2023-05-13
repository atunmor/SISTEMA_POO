document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtén los valores de usuario y contraseña
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    // Comprueba si el usuario y la contraseña son correctos
    if (usuario === "admin" && contrasena === "admin123") {
        // Redirecciona a la página principal
        window.location.href = "Pagina_principal.html";
    } else {
        alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
});
