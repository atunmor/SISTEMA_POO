
//--------------------------------
//**--VARIABLES
let formularioCita;
let citas= []   //Se declarar la variable citas como un array vacío
//---------------------------

//** -----CLASES------

class Cita {    //CLASE PARA GUARDAR LA INFORMACION EL FORMULARIO DE CITAS
    constructor (nombre, fecha, hora, observaciones) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.hora = hora;
        this.observaciones = observaciones;
    }
}

//--FUNCION PARA CREAR EL CALENDARIO
function generarCalendario() {
    //OBTENR FECHA ACTUAL
    const fechaActual = new Date(); //OBTENER FECHA ACTUAL
    const año = fechaActual.getFullYear();
    const mes = fechaActual.getMonth();
    const diaActual = fechaActual.getDate(); //OBTENER EL DIA ACTUAL
    
    //OBTENER EL PRIMER Y ULTIMO DIA DEL MES ACTUAL
    const primerDiaMes = new Date(año, mes, 1);
    const ultimoDiaMes = new Date(año, mes + 1, 0);
    const numDiasMes = ultimoDiaMes.getDate();
    const primerDiaSemana = primerDiaMes.getDay();
  
    //OBTENER EL ELEMNETO DEL CALENDARIO
    const calendario = document.getElementById("calendario");
    calendario.innerHTML = ""; // Limpiar el contenido existente del calendario
  
    // Generar encabezado del calendario
    const encabezado = document.createElement("h1");
    encabezado.textContent = obtenerNombreMes(mes) + " " + año;
    calendario.appendChild(encabezado);

   
  
    // Generar tabla del calendario
    const tabla = document.createElement("table");
    tabla.id = "tabla-calendario"; // Agregar el id al elemento de la tabla
    calendario.appendChild(tabla);
  
    // Generar encabezado de días de la semana
    const encabezadoDiasSemana = document.createElement("thead");
    const filaDiasSemana = document.createElement("tr");
    tabla.appendChild(encabezadoDiasSemana);
    encabezadoDiasSemana.appendChild(filaDiasSemana);
  
    //SE DEFINEN LOS NOMBRES DE LOS DIAS DE LA SEMANA
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    for (let i = 0; i < 7; i++) {
      const celda = document.createElement("th");
      celda.textContent = diasSemana[i];
      filaDiasSemana.appendChild(celda);
    }
  
    // Generar cuerpo del calendario
    const cuerpoCalendario = document.createElement("tbody");
    tabla.appendChild(cuerpoCalendario);
  
    let dia = 1;
    for (let i = 0; i < 6; i++) {
      const fila = document.createElement("tr");
      cuerpoCalendario.appendChild(fila);
  
      for (let j = 0; j < 7; j++) {
            if ((i === 0 && j < primerDiaSemana) || dia > numDiasMes) {
            celda = document.createElement("td");
            fila.appendChild(celda);
            } else {
                const celda = document.createElement("td");
                celda.textContent = dia;
                celda.setAttribute("data-date", `${año}-${mes + 1}-${dia}`); //AGREGAR ATRIBUTO DE FECHA
                celda.classList.add("celda-calendario");// Agregar la clase "celda-calendario" a la celda
                fila.appendChild(celda);
                dia++;
                
                //--RESALTAR EL DIA ACTUAL
                if (dia === diaActual && mes === fechaActual.getMonth() && año === fechaActual.getFullYear()) {
                    celda.classList.add("dia-actual"); //aGREGAR LA CLASE "DIA-ACTUAL" A LA CELDA
                }
            }   
        }

        if (dia > numDiasMes) {
            break;
        }
    }

    //Evento para capturar el evento de envio (submit)
    formularioCita = document.getElementById("formulario-cita");
    formularioCita.addEventListener("submit", guardarCita);
}

function obtenerNombreMes(mes) {
    const nombresMeses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];
    return nombresMeses[mes];
}

function guardarCita(event) {
    event.preventDefault(); //EVITA QUE SE RECARGUE LA PAGINA AL ENVIAR EL FORMULARIO

    //OBTENER LOS VALORES DEL FORMULARIO
    const nombre = document.getElementById("nombre-paciente").value;
    const fecha = document.getElementById("fecha-cita").value;
    const hora = document.getElementById("hora-cita").value;
    const observaciones = document.getElementById("observaciones").value;

    //Crea una nueva instacia de la clase cita
    const nuevaCita = new Cita(nombre, fecha, hora, observaciones);

    //Se agrega la cita al array citas
    citas.push(nuevaCita);

    //LLAMAR A LA FUNCION PARA MOSTRAR LAS CITAS DEL DIA
    mostrarCitasDia();

    //!-------------------- */
    //!-------------------- */
    //! */ Aquí puedes realizar cualquier acción adicional, como enviar la cita al servidor, almacenarla en una base de datos, etc.
    //!-------------------- */
    //!-------------------- */

    //SOLO PARA VER QUE SE ESTA GURDANDO ELIMINAR DESPUES
    console.log("Cita guardada", nuevaCita);
    //LIMPIA EL FORMULARIO DESPUES DE GUARDAR
    formularioCita.reset();


}

function mostrarCitasDia() {
    const citasContainer = document.getElementById("citas-dia");
    citasContainer.innerHTML = ""; //Limpiar el contenido existente

    //Iterar sobre citas y mostrarlas en el contenedor
    for (const cita of citas) {
        const citaElement = document.createElement("div");
        citaElement.classList.add("cita-container");
        
        
        const fechaElement = document.createElement("label");
        const fecha = new Date(cita.fecha);
        const dia = fecha.getDate();
        const mes = fecha.getMonth(); 
        fechaElement.textContent =  `${dia}/${mes}`;  //Muestra solo el dia y el mes 
        citaElement.appendChild(fechaElement);
        
        const nombreElement = document.createElement("label");
        nombreElement.textContent =cita.nombre  //Muestra el nombre
        citaElement.appendChild(nombreElement);
        
        const horaElement = document.createElement("label");
        const hora = cita.hora;
        const esPM = hora >= 12; // Verificar si es PM
        const horaFormateada = hora % 12 || 12; // Obtener hora en formato de 12 horas
        const periodo = esPM ? "PM" : "AM"; // Determinar si es AM o PM
        horaElement.textContent = `${horaFormateada}:${cita.hora.substr(3)} ${periodo}`; // Mostrar hora y AM/PM
        citaElement.appendChild(horaElement);

        citasContainer.appendChild(citaElement);
    }
}

//--Ventana emergente de "MI PERFIL"
// Obtener referencias a elementos relevantes
const perfilLink = document.getElementById("perfil-link");
const popup = document.getElementById("popup");
const closeButton = document.getElementById("close-button");

// Mostrar la ventana emergente cuando se hace clic en el enlace "Mi perfil"
perfilLink.addEventListener("click", function (event) {
  event.preventDefault(); // Evitar la navegación predeterminada
  popup.style.display = "block"; // Mostrar la ventana emergente
});

// Ocultar la ventana emergente cuando se hace clic en el botón "Cerrar"
closeButton.addEventListener("click", function () {
  popup.style.display = "none"; // Ocultar la ventana emergente
});




// Llamar a la función para generar el calendario al cargar la página
window.addEventListener("load", generarCalendario);


