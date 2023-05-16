document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtén los valores de usuario y contraseña
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    // Realiza una petición AJAX para validar las credenciales
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "PHP/login_DB.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.success) {
                    // Redirecciona a la página principal si las credenciales son correctas
                    window.location.href = "Pagina_principal.html";
                } else {
                    alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
                }
            } else {
                alert("Error al procesar la solicitud. Por favor, inténtalo de nuevo.");
            }
        }
    };
    xhr.send("usuario=" + encodeURIComponent(usuario) + "&contrasena=" + encodeURIComponent(contrasena));
});



  