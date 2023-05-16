USE SISTEMA_MEDICO;

CREATE TABLE citas (
	id_citas INT AUTO_INCREMENT PRIMARY KEY,
    paciente_nombre VARCHAR (100),
    fecha_cita DATE,	
    hora_cita TIME, 
    observaciones_cita TEXT
);

SHOW TABLES;

DESCRIBE citas;


CREATE TABLE Usuarios (
	id_usuarios INT AUTO_INCREMENT PRIMARY KEY,
    usuario_nombre NVARCHAR (100),
    correo_usuario VARCHAR (150),
    contrasena_usuario	VARCHAR (50),
    fecha_creacion DATE,
    fecha_modificacion DATE,
    activo BIT DEFAULT 1
);

ALTER TABLE Usuarios
MODIFY COLUMN usuario_nombre VARCHAR(100),
MODIFY COLUMN activo TINYINT(1);

INSERT INTO Usuarios (usuario_nombre, correo_usuario, contrasena_usuario, fecha_creacion, fecha_modificacion, activo)
VALUES ('admin', 'admin@correoadmin.com', 'admin123', CURDATE(), CURDATE(), 1);
SELECT *FROM Usuarios;


