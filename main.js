$(document).ready(function () {
  // Llamada función de menú de show food
  showGymMenu();
});

// Lectura de datos de gym.xml usando Jquery | AJAX

function showGymMenu() {
  $.ajax({
    type: "GET",
    url: "./gym.xml",
    dataType: "xml",

    error: function (e) {
      alert("Error procesando el archivo XML");
      console.log("Lectura de XML fallida: ", e);
    },

    success: function (response) {
      // Verificar que el contenedor esta vacio
      // Antes de agregar los datos
      $(".xmldata").children().remove();

      $(response)
        .find("gimnasio")
        .each(function () {
          var _nombre = $(this).find("nombre").text();
          var _precio = $(this).find("precio").text();
          var _direccion = $(this).find("direccion").text();
          var _horario = $(this).find("horario").text();
          var _actividades = $(this).find("actividades").text();
        
        //Salida a consola
        console.log(
          _nombre
          _precio
          _direccion
          _horario
          _actividades
        )

          // Agregar el contenido a HTML
          $(".xmldata").append(
            "<li>" +
              `<font color="red" >Nombre: </font>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;` +
              _nombre +
              "</li>"
          );
          $(".xmldata").append(
            "<li>" +
              `<font color="red" >Precio: </font>
               &nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp; <span> $ </span> ` +
              _precio +
              "</li>"
          );
          $(".xmldata").append(
            "<li>" +
              `<font color="red" >Dirección: </font> 
              &nbsp&nbsp;&nbsp;&nbsp;` +
              _direccion +
              "</li>"
          );
          $(".xmldata").append(
            "<li>" +
              `<font color="red" >Horario: </font>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;` +
              _horario +
              "</li>"
          );
          $(".xmldata").append(
            "<li>" +
              `<font color="red" >Actividades: </font>
               &nbsp;` +
              _actividades +
              "</li>"
          );
          $(".xmldata").append("<br>");
        });
    },
  });
}
