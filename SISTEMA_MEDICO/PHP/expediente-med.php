<!DOCTYPE html>
<html>
<head>
	<title>Expediente Medico</title>
	<link rel="stylesheet" type="text/css" href="../CSS/style-exp.css">
</head>
<body>

<header>
        <!--NAVBAR-->
        <nav>
            <div class="container-img">
                <img src="../img/LOGO.jpg" alt="LOGO">
                <a href="Pagina_principal.php">NAME</a>
            </div>
            <div class="container-links">
                <a href="Pagina_principal.php">Inicio</a>
                <a href="Buscador.php">Pacientes</a>
                <a href="expediente-med.php">Expediente</a>
            </div>
            <div class="menu-user">
                <a href="#" id="perfil-link">Mi perfil</a><br>
                <a href="#">Editar perfil</a><br>
                <a href="#">Cerrar Sesión</a>
            </div>
            <div class="container-menu">
                <img src="../img/usuario-icono.png" alt="usuario-icono">

            </div>

            <!--Ventana emergente-->
            <div id="popup" class="popup">
                <!-- Contenido de la ventana emergente -->
                <h2>Mi perfil</h2>
                <p>Aquí está la información de tu perfil.</p>
                <button id="close-button">Cerrar</button>
              </div>
        </nav>
    </header>

	

<main>
<div class="container">
  <div class="left-section">
    <h2>Información personal</h2>
    <form>
    <?php
if (isset($_GET['id'])) {
    // Establecer la conexión a la base de datos
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "sis_med";

    $conn = new mysqli($servername, $username, $password, $database);
    if ($conn->connect_error) {
        die("Error al conectar con la base de datos: " . $conn->connect_error);
    }

    // Obtener el ID del paciente desde la URL
    $idPaciente = $_GET['id'];

    // Obtener los datos del paciente de la tabla correspondiente de la base de datos
    $sql = "SELECT * FROM pacientes WHERE id_pac = $idPaciente";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();

        echo "<div class='container'>";
        echo "<div class='left-section'>";
        echo "<h2>Información personal</h2>";
        echo "<form>";
        echo "<h3>Nombre: " . $row['nom_pac'] . "</h3>";
        echo "<h3>Apellido Paterno: " . $row['ap_pac'] . "</h3>";
        echo "<h3>Apellido Materno: " . $row['am_pac'] . "</h3>";
        echo "<h3>Edad: " . $row['edad_pac'] . "</h3>";
        echo "<h3>Sexo: " . $row['sexo_pac'] . "</h3>";
        echo "<h3>Estatura: " . $row['est_pac'] . "</h3>";
        echo "<h3>Peso: " . $row['peso_pac'] . "</h3>";
        echo "<h3>Tipo de sangre: " . $row['ts_pac'] . "</h3>";
        echo "</form>";
        echo "</div>";
        echo "</div>";
    } else {
        // El paciente no fue encontrado
        echo "Paciente no encontrado";
    }

    // Cierra la conexión a la base de datos
    $conn->close();
} else {
    echo "ID de paciente no especificado";
}
?>

    </form>
  </div>
</div>

		<div class="right-section">
			<h2>Receta médica</h2>
			<form>
				<label for="medicine">Medicamento:</label>
				<input type="text" id="medicine" name="medicine" required>
		
				<label for="dosage">Dosis:</label>
				<input type="text" id="dosage" name="dosage" required>
		
				<label for="frequency">Frecuencia:</label>
				<input type="text" id="frequency" name="frequency" required>
		
				<label for="duration">Duración:</label>
				<input type="text" id="duration" name="duration" required>
		
				<button type="submit">Enviar</button>
			</form>
		</div>
	</div>

	<div class="consulta-title">
			<h2>Consulta</h2>
	</div>
	<div class="consulta">
		
		<div class="chequeo">
			<label for="">Peso</label>
			<input type="number" placeholder="Ingresar Peso">
			<label for="">Presion</label>
			<input type="text" placeholder="Ingresar la Presion">
			<label for="">Oxigenacion</label>
			<input type="number" placeholder="Ingresar los niveles de oxigenacion">
			<label for="">Estatura</label>
			<input type="number" placeholder="Ingresar la estatura">
		</div>
		<div class="observaciones">
			<label for="">Observaciones</label>
			<textarea name="" id="" cols="30" rows="10"></textarea>
			<input type="submit" value="Cancelar">

			<input type="submit" value="Guardar">
		</div>
	</div>
</main>

	


	
</body>
</html>
