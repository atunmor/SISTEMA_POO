//Importando paquete MYSQL
const mysql = require('mysql');


//Configuracion de la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Exlibris1',
    database: 'SISTEMA_MEDICO',
});

//Establecer la coneccion con la BD
connection.connect((error) => {
    if(error) throw error;
    console.log('Coneccion exitosa a la base de datos MYSQL');
});

//ejecutar consultas SQL utilizando el metodo query()
//Insertar un nueva cita en la tabla 
const nuevaCita = {
    nombre: 'John Doe',
    fecha: '2023-05-16',
    hora: '12:00:00',
    observaciones: 'Alguna observación'
  };
  
  const query = 'INSERT INTO citas SET ?';
  connection.query(query, nuevaCita, (error, results, fields) => {
    if (error) throw error;
    console.log('Cita creada con éxito');
  });

  //cerrar conexion
  connection.end((error) => {
    if (error) throw error;
    console.log('Conexión cerrada correctamente');
  });
  
  
