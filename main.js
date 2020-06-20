$(document).ready(function () {
  // Llamada función de menú de show food
  showFoodMenu();
});

// Lectura de datos de gym.xml usando Jquery | AJAX

function showFoodMenu() {
  $.ajax({
    type: "GET",
    url: "./gym.xml",
    dataType: "xml",

    error: function (e) {
      alert("A ocurrido un error procesando el archivo XML");
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
          console.log(_nombre);

          var _precio = $(this).find("precio").text();
          var _direccion = $(this).find("direccion").text();
          var _horario = $(this).find("horario").text();
          var _actividades = $(this).find("actividades").text();

          // Agregar el contenido a HTML
          $(".xmldata").append(
            "<li>" +
              `<font color="red" face="Comic Sans MS,arial,verdana">Nombre: </font>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;` +
              _nombre +
              "</li>"
          );
          $(".xmldata").append(
            "<li>" +
              `<font color="red" face="Comic Sans MS,arial,verdana">Precio: </font>
               &nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp; <span> $ </span> ` +
              _precio +
              "</li>"
          );
          $(".xmldata").append(
            "<li>" +
              `<font color="red" face="Comic Sans MS,arial,verdana">Dirección: </font> 
              &nbsp&nbsp;&nbsp;&nbsp;` +
              _direccion +
              "</li>"
          );
          $(".xmldata").append(
            "<li>" +
              `<font color="red" face="Comic Sans MS,arial,verdana">Horario: </font>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;` +
              _horario +
              "</li>"
          );
          $(".xmldata").append(
            "<li>" +
              `<font color="red" face="Comic Sans MS,arial,verdana">Actividades: </font>
               &nbsp;` +
              _actividades +
              "</li>"
          );
          $(".xmldata").append("<br>");
        });
    },
  });
}
