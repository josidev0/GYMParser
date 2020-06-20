// Do some stuff when page hmtl page is launched
$(document).ready(function () {
  $("#headerTitle").hide(300).show(1500);
  // calling show food menu function
  showFoodMenu();

  // If you want to fetch data from the file
  // call fetch data function instead of showFoodMenu
  // fetchData()
});

// ***************************************************************************************
// this function calls showfoodmenu 3000 milisecond to get new changes                   *
// made on demo.xml                                                                      *
// ***************************************************************************************
function fetchData() {
  setTimeout(function () {
    showFoodMenu();
    // recursive call
    fetchData();
  }, 3000);
}

// **************************************************************************************
// read data from demo.xml using Jquery | AJAX                                          *
// **************************************************************************************
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
      // make sure the ul is empty
      // before appending data inot it
      $("ul").children().remove();

      $(response)
        .find("gimnasio")
        .each(function () {
          var _nombre = $(this).find("nombre").text();
          console.log(_nombre);

          var _precio = $(this).find("precio").text();
          var _direccion = $(this).find("direccion").text();
          var _horario = $(this).find("horario").text();
          var _actividades = $(this).find("actividades").text();

          // add content to the HTML
          $("ul").append(
            "<li>" +
              `<font color="red" face="Comic Sans MS,arial,verdana">Nombre: </font>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;` +
              _nombre +
              "</li>"
          );
          $("ul").append(
            "<li>" +
              `<font color="red" face="Comic Sans MS,arial,verdana">Precio: </font>
               &nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp; <span> $ </span> ` +
              _precio +
              "</li>"
          );
          $("ul").append(
            "<li>" +
              `<font color="red" face="Comic Sans MS,arial,verdana">Dirección: </font> 
              &nbsp&nbsp;&nbsp;&nbsp;` +
              _direccion +
              "</li>"
          );
          $("ul").append(
            "<li>" +
              `<font color="red" face="Comic Sans MS,arial,verdana">Horario: </font>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;` +
              _horario +
              "</li>"
          );
          $("ul").append(
            "<li>" +
              `<font color="red" face="Comic Sans MS,arial,verdana">Actividades: </font>
               &nbsp;` +
              _actividades +
              "</li>"
          );
          $("ul").append("<br>");
        });
    },
  });
}
