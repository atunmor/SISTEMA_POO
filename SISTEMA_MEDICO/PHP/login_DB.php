<?php

    // Configuración del servidor
    $servername = "localhost";
    $username = "root";
    $password = "Exlibris1";
    $dbname = "SISTEMA_MEDICO";

    // Crear la conexión
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verificar la conexión
    if ($conn->connect_error) {
        die("Error de conexión: " . $conn->connect_error);
    }

    // Obtener los valores de usuario y contraseña de la petición POST
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];

    // Escapar caracteres especiales para evitar inyección de SQL
    $usuario = $conn->real_escape_string($usuario);
    $contrasena = $conn->real_escape_string($contrasena);

    // Consulta para validar las credenciales
    $query = "SELECT * FROM Usuarios WHERE usuario_nombre = '$usuario' AND contrasena_usuario = '$contrasena'";
    $result = $conn->query($query);

    if ($result->num_rows === 1) {
        // Credenciales válidas
        $response = array("success" => true);
    } else {
        // Credenciales inválidas
        $response = array("success" => false);
    }

    // Envía la respuesta como JSON
    header("Content-Type: application/json");
    echo json_encode($response);

    // Cierra la conexión a la base de datos
    $conn->close();
?>
