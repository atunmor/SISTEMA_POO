

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario
  
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;
  
    if (usuario === "admin" && contrasena === "admin123") {
      window.location.href = "../../HTML/Pagina_principal.html"; // Redirigir a la página de la pantalla principal
    } else {
      alert("Credenciales incorrectas. Inténtalo de nuevo."); // Mostrar mensaje de error
    }
  });
  