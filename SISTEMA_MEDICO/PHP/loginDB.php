<?php
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "sis_med";

$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

if (!$conn) {
  die("No hay conexión: " . mysqli_connect_error());
}

$nom_doc = $_POST["user_doc"];
$pass_doc = $_POST["con_doc"];

$query = mysqli_query($conn, "SELECT * FROM doctores WHERE user_doc='" . $nom_doc . "' and pass_doc='" . $pass_doc . "'");
$nr = mysqli_num_rows($query);

if ($nr == 1) {
  // Redireccionar a la página deseada
  header("Location: Pagina_principal.php");
  exit(); // Asegurar que el código se detiene después de la redirección
} else {
  echo "Datos ingresados incorrectos";
}
?>
