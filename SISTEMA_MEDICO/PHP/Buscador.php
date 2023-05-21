<!DOCTYPE html>
<html>
<head>
	<title>Pacientes</title>
  <link rel="stylesheet" href="../CSS/buscador.css">
	
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
    <div class="BC">
      <div class="contenedor1">

        <form method="post" action="guardar.php">
          <label for="NombreBC">Nombre(s): </label>
          <input type="text" name="Nombre" id="NombreBC" min="1" max="50"><br>

          <label for="ApBC">Apellido paterno: </label>
          <input type="text" name="Ap" id="ApBC" min="1" max="15"><br>

          <label for="AmBc">Apellido materno: </label>
          <input type="text" name="Am" id="AmBC" min="1" max="15"><br>

          <label for="SexoBC">Sexo:</label>
          <select name="genero" id="SexoBC">
            <option>Masculino</option>
            <option>Femenino</option>
            <option>Otro</option>
          </select><br>

          <label for="TsBC">Tipo de Sangre:</label>
          <select name="tipsa" id="TsBC">
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select><br>

          <label for="EdadBC">Edad:</label>
          <input type="number" name="edad" id="EdadBC" min="3" max="117"><br>

          <label for="PesoBC">Peso: </label>
          <input type="number" name="peso" id="PesoBC" min="0" max="400"><br>

          <label for="EstaturaBC">Estatura: </label>
          <input type="number" name="estatura" id="EstaturaBC" min="0" max="260"><br>

          <label for="CURPBC">CURP: </label>
          <input type="text" name="CURP" id="CURPBC" min="18" max="18"><br>

          <button type="submit" name="submit">Registrar</button>
        </form>
      </div>

      <div class="contenedor2">
        Datos del paciente:
        <div>
          <form method="get" action="">
            <p>Nombre: <input type="text" name="Nombre" id="NombreBC" min="1" max="50"></p>
            <p>Apellido paterno: <input type="text" name="Ap" id="ApBC" min="1" max="15"></p>
            <p>Apellido materno: <input type="text" name="Am" id="AmBC" min="1" max="15"></p>
            <p>Genero:
              <select name="genero" id="SexoBC">
                <option>Masculino</option>
                <option>Femenino</option>
                <option>Otro</option>
              </select>
            </p>
            <p>Tipo de Sangre:
              <select name="tipsa" id="TsBC">
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
            </p>
            <p>Edad: <input type="number" name="edad" id="EdadBC" min="3" max="117"></p>
            <p>Peso: <input type="number" name="peso" id="PesoBC" min="0" max="400"></p>
            <p>Estatura: <input type="number" name="estatura" id="EstaturaBC" min="0" max="260"></p>
            <p>CURP: <input type="text" name="CURP" id="CURPBC" min="18" max="18"></p>
            <br>
            <button type="submit" name="submit">Buscar</button>
          </form>
        </div>
      </div>

    </div>

    <div id="mostrar-datos">
        <table id="tabla-pacientes">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido Paterno</th>
                    <th>Apellido Materno</th>
                    <th>Género</th>
                    <th>Tipo de Sangre</th>
                    <th>Edad</th>
                    <th>Peso</th>
                    <th>Estatura</th>
                    <th>CURP</th>
                </tr>
            </thead>
            <tbody>
            <?php
                if (isset($_GET['submit'])) {
                    // Establecer la conexión a la base de datos
                    $servername = "localhost";
                    $username = "root";
                    $password = "";
                    $database = "sis_med";

                    $conn = new mysqli($servername, $username, $password, $database);
                    if ($conn->connect_error) {
                        die("Error al conectar con la base de datos: " . $conn->connect_error);
                    }

                    // Obtener los valores de los campos de búsqueda
                    $nombre = $_GET['Nombre'];
                    $apellidoPaterno = $_GET['Ap'];
                    $apellidoMaterno = $_GET['Am'];
                    $genero = $_GET['genero'];
                    $tipoSangre = $_GET['tipsa'];
                    $edad = $_GET['edad'];
                    $peso = $_GET['peso'];
                    $estatura = $_GET['estatura'];
                    $curp = $_GET['CURP'];

                    // Construir la consulta SQL con los criterios de búsqueda
                    $sql = "SELECT * FROM pacientes WHERE 1=1";

                    if (!empty($nombre)) {
                        $sql .= " AND nom_pac LIKE '%$nombre%'";
                    }
                    if (!empty($apellidoPaterno)) {
                        $sql .= " AND ap_pac LIKE '%$apellidoPaterno%'";
                    }
                    if (!empty($apellidoMaterno)) {
                        $sql .= " AND am_pac LIKE '%$apellidoMaterno%'";
                    }
                    if (!empty($genero)) {
                        $sql .= " AND sexo_pac = '$genero'";
                    }
                    if (!empty($tipoSangre)) {
                        $sql .= " AND ts_pac = '$tipoSangre'";
                    }
                    if (!empty($edad)) {
                        $sql .= " AND edad_pac = $edad";
                    }
                    if (!empty($peso)) {
                        $sql .= " AND peso_pac = $peso";
                    }
                    if (!empty($estatura)) {
                        $sql .= " AND est_pac = $estatura";
                    }
                    if (!empty($curp)) {
                        $sql .= " AND curp_pac = '$curp'";
                    }

                    $result = $conn->query($sql);

                    // Genera las filas de la tabla con los datos de la base de datos
                    if ($result->num_rows > 0) {
                        while ($row = $result->fetch_assoc()) {
                            echo "<tr>";
                            echo "<td><a href='expediente-med.php?id=" . $row["id_pac"] . "'>" . $row["nom_pac"] . "</a></td>";
                            echo "<td>" . $row["ap_pac"] . "</td>";
                            echo "<td>" . $row["am_pac"] . "</td>";
                            echo "<td>" . $row["sexo_pac"] . "</td>";
                            echo "<td>" . $row["ts_pac"] . "</td>";
                            echo "<td>" . $row["edad_pac"] . "</td>";
                            echo "<td>" . $row["peso_pac"] . "</td>";
                            echo "<td>" . $row["est_pac"] . "</td>";
                            echo "<td>" . $row["curp_pac"] . "</td>";
                            echo "</tr>";
                        }
                    } else {
                        echo "<tr><td colspan='9'>No se encontraron datos</td></tr>";
                    }

                    // Cierra la conexión a la base de datos
                    $conn->close();
                }
                ?>
            </tbody>
        </table>
    </div>
    
  </main>

  <footer>
  </footer>
</body>
</html>