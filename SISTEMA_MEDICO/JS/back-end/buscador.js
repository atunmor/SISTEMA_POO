/*function search() {
    // Obtener los datos ingresados por el usuario
    var input1 = document.getElementById("input1").value.toUpperCase();
    var input2 = document.getElementById("input2").value.toUpperCase();
    var input3 = document.getElementById("input3").value.toUpperCase();
    var input4 = document.getElementById("input4").value.toUpperCase();
    var input5 = document.getElementById("input5").value.toUpperCase();
    var input6 = document.getElementById("input6").value.toUpperCase();
    var input7 = document.getElementById("input7").value.toUpperCase();
    var input8 = document.getElementById("input8").value.toUpperCase();
    var input9 = document.getElementById("input9").value.toUpperCase();
    
    // Obtener la tabla donde se mostrarán los resultados
    var table = document.getElementsByTagName("table")[0];
    
    // Obtener todas las filas de la tabla
    var rows = table.getElementsByTagName("tr");
  
    // Iterar sobre las filas y ocultar aquellas que no coincidan con los datos ingresados
    for (var i = 1; i < rows.length; i++) {
      var row = rows[i];
      var cells = row.getElementsByTagName("td");
      var match = true;
  
      if (cells.length >= 9) {
        var cell1 = cells[0].textContent.toUpperCase();
        var cell2 = cells[1].textContent.toUpperCase();
        var cell3 = cells[2].textContent.toUpperCase();
        var cell4 = cells[3].textContent.toUpperCase();
        var cell5 = cells[4].textContent.toUpperCase();
        var cell6 = cells[5].textContent.toUpperCase();
        var cell7 = cells[6].textContent.toUpperCase();
        var cell8 = cells[7].textContent.toUpperCase();
        var cell9 = cells[8].textContent.toUpperCase();
  
        if (cell1.indexOf(input1) === -1 || cell2.indexOf(input2) === -1 || cell3.indexOf(input3) === -1 || 
            cell4.indexOf(input4) === -1 || cell5.indexOf(input5) === -1 || cell6.indexOf(input6) === -1 || 
            cell7.indexOf(input7) === -1 || cell8.indexOf(input8) === -1 || cell9.indexOf(input9) === -1) {
          match = false;
        }
  
        if (match) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      }
    }
  }*/

 /* let FormularioPacientes;
  let Pacientes=[]

  class Paciente{
    constructor(NombreBC, ApBC, AmBC, SexoBC, TsBC, EdadBC, PesoBC, EstaturaBC, CURPBC){
      this.NombreBC= NombreBC;
      this.ApBC= ApBC;
      this.AmBC= AmBC;
      this.SexoBC=SexoBC;
      this.TsBC=TsBC;
      this.EdadBC=EdadBC;
      this.PesoBC=PesoBC;
      this.EstaturaBC=EstaturaBC;
      this.CURPBC=CURPBC;
    }
  }

 FormularioPacientes = document.getElementById("Formulario-Pacientes");
 FormularioPacientes.addEventListener("submit", registrarPaciente);

 function registrarPaciente(event) {
  event.preventDefault(); //EVITA QUE SE RECARGUE LA PAGINA AL ENVIAR EL FORMULARIO

  //OBTENER LOS VALORES DEL FORMULARIO
  const NombreBC = document.getElementById("NombreBC").value;
  const ApBC = document.getElementById("ApBC").value;
  const AmBC = document.getElementById("AmBC").value;
  const SexoBC = document.getElementById("SexoBC").value;
  const TsBC = document.getElementById("TsBC").value;
  const EdadBC = document.getElementById("EdadBC").value;
  const PesoBC= document.getElementById("PesoBC").value;
  const EstaturaBC= document.getElementById("EstaturaBC").value;
  const CURPBC= document.getElementById("CURPBC").value;


  //Crea una nueva instacia de la clase cita
  const nuevoPaciente = new Paciente(NombreBC, ApBC, AmBC, SexoBC, TsBC, EdadBC, PesoBC, EstaturaBC, CURPBC);

  //Se agrega la cita al array citas
  citas.push(nuevoPaciente);

  

  //LLAMAR A LA FUNCION PARA MOSTRAR LAS CITAS DEL DIA
  mostrarPacientesBC();

  //!-------------------- */
  //!-------------------- */
  //! */ Aquí puedes realizar cualquier acción adicional, como enviar la cita al servidor, almacenarla en una base de datos, etc.
  //!-------------------- */
  //!-------------------- */

  //SOLO PARA VER QUE SE ESTA GURDANDO ELIMINAR DESPUES
 // console.log("Paciente Registrado", nuevoPaciente);
  //LIMPIA EL FORMULARIO DESPUES DE GUARDAR
 // FormularioPacientes.reset();

  
 // Definición de la clase Paciente
 let Pacientes = [];

class Paciente {
  constructor(NombreBC, ApBC, AmBC, SexoBC, TsBC, EdadBC, PesoBC, EstaturaBC, CURPBC) {
    this.NombreBC = NombreBC;
    this.ApBC = ApBC;
    this.AmBC = AmBC;
    this.SexoBC = SexoBC;
    this.TsBC = TsBC;
    this.EdadBC = EdadBC;
    this.PesoBC = PesoBC;
    this.EstaturaBC = EstaturaBC;
    this.CURPBC = CURPBC;
  }
}

function registrar() {
  const nombre = document.getElementById("NombreBC").value;
  const apellidoPaterno = document.getElementById("ApBC").value;
  const apellidoMaterno = document.getElementById("AmBC").value;
  const genero = document.getElementById("SexoBC").value;
  const tipoSangre = document.getElementById("TsBC").value;
  const edad = document.getElementById("EdadBC").value;
  const peso = document.getElementById("PesoBC").value;
  const estatura = document.getElementById("EstaturaBC").value;
  const curp = document.getElementById("CURPBC").value;

  const nuevoPaciente = new Paciente(
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    genero,
    tipoSangre,
    edad,
    peso,
    estatura,
    curp
  );

  Pacientes.push(nuevoPaciente);

  mostrarPacientes();
  limpiarFormulario();
}

function mostrarPacientes() {
  const tablaPacientes = document.getElementById("tabla-pacientes");
  const tbody = tablaPacientes.querySelector("tbody");
  tbody.innerHTML = "";

  Pacientes.forEach((paciente) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${paciente.NombreBC}</td>
      <td>${paciente.ApBC}</td>
      <td>${paciente.AmBC}</td>
      <td>${paciente.SexoBC}</td>
      <td>${paciente.TsBC}</td>
      <td>${paciente.EdadBC}</td>
      <td>${paciente.PesoBC}</td>
      <td>${paciente.EstaturaBC}</td>
      <td>${paciente.CURPBC}</td>
    `;
    tbody.appendChild(fila);
  });
}

function limpiarFormulario() {
  document.getElementById("NombreBC").value = "";
  document.getElementById("ApBC").value = "";
  document.getElementById("AmBC").value = "";
  document.getElementById("SexoBC").selectedIndex = 0;
  document.getElementById("TsBC").selectedIndex = 0;
  document.getElementById("EdadBC").value = "";
  document.getElementById("PesoBC").value = "";
  document.getElementById("EstaturaBC").value = "";
  document.getElementById("CURPBC").value = "";
}

function confirmarRegistro() {
  const confirmado = window.confirm("¿Deseas registrar los datos del paciente?");
  if (confirmado) {
    registrar();
  }
}

// Llamada inicial para mostrar los pacientes si existen
mostrarPacientes();
