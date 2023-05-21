<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../CSS/Principal.css">
    <title>Inicio</title>
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
        <!-- BUSCADOR -->
        
        <div class="buscador">
            <div class="barra-buscador">
                <label for="input-buscador">Buscar </label>
                <input id="input-buscador" class="input-buscador" type="search" placeholder="Ingresar nombre del paciente">
                <input class="input-btn" type="submit" value="Buscar">
            </div>

            <!-- CITAS DEL DIA -->
            <div class="citas-head">
                    <h4>Fecha</h4>
                    <h4>Nombre</h4>
                    <h4>Hora</h4>
            </div>
            <div class="citas" id="citas-dia">
                <!-- Las citas se cargarán aquí con JavaScript -->
                <div class="cita-container">
                    <label for=""></label>
                    <label for=""></label>
                    <label for=""></label>
                </div>
            </div>
        </div>

        <!-- CALENDARIO CON JS -->
        <div id="calendario" class="calendario"></div>

        <!-- GENERADOR DE CITAS -->
        <div class="new-date">
            <form id="formulario-cita">
                <label for="nombre-paciente">Nombre del paciente: </label>
                <input id="nombre-paciente" type="text" placeholder="Nombre">
                <label for="fecha-cita">Fecha: </label>
                <input id="fecha-cita" type="date">
                <label for="hora-cita">Hora: </label>
                <input id="hora-cita" type="time">
                <label for="observaciones">Observaciones: </label>
                <textarea id="observaciones" placeholder="Ingresar observaciones ..."></textarea>
                <div class="new-date-btn">
                    <input type="submit" value="Agregar">
                    <input type="button" value="Cancelar">
                </div>
            </form>
        </div>
        
    </main>

    <footer></footer>

    <script src="../JS/front-end/calendario.js"></script>

</body>
</html>
