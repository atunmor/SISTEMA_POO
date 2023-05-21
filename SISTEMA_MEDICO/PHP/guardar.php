<?php
if (isset($_POST['submit'])) {
    // Establecer la conexión a la base de datos
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "sis_med";

    $conn = new mysqli($servername, $username, $password, $database);
    if ($conn->connect_error) {
        die("Error al conectar con la base de datos: " . $conn->connect_error);
    }

    // Obtener los datos del formulario
    $nombre = $_POST['Nombre'];
    $apellidoPaterno = $_POST['Ap'];
    $apellidoMaterno = $_POST['Am'];
    $genero = $_POST['genero'];
    $tipoSangre = $_POST['tipsa'];
    $edad = $_POST['edad'];
    $peso = $_POST['peso'];
    $estatura = $_POST['estatura'];
    $curp = $_POST['CURP'];

    // Insertar los datos en la tabla correspondiente de la base de datos
    $sql = "INSERT INTO pacientes (nom_pac, ap_pac, am_pac, sexo_pac, ts_pac, edad_pac, peso_pac, est_pac, curp_pac) 
    VALUES ('$nombre', '$apellidoPaterno', '$apellidoMaterno', '$genero', '$tipoSangre', '$edad', '$peso', '$estatura', '$curp')";

    if ($conn->query($sql) === TRUE) {
        // Obtener el ID del paciente recién insertado
        $idPaciente = $conn->insert_id;

        // Redireccionar a la página de visualización del paciente con el ID como parámetro
        header("Location: pagina_visualizacion.php?id=$idPaciente");
        exit();
    } else {
        echo "Error al ingresar los datos: " . $conn->error;
    }

    // Cierra la conexión a la base de datos
    $conn->close();
}
?>
