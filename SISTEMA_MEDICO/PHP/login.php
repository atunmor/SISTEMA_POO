<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../CSS/main.css">
    <title>Document</title>
</head>
<body>
    <div class="container-login">
        <form method="POST" action="loginDB.php" id="loginForm">
            <h1>Bienvenido</h1>
            <label for="usuario">Usuario:</label>
            <input type="text" id="usuario" name="user_doc" placeholder="Ingresar Usuario">
            <label for="contrasena">Contraseña:</label>
            <input type="password" id="contrasena" name="con_doc" placeholder="Ingresar Contraseña">
            <p>Olvidaste tu contraseña contacta con mantenimiento</p><br><br>
            <input type="submit" value="Iniciar Sesión">
        </form>
    </div>
</body>
</html>
