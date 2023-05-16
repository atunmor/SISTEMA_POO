function search() {
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
  }