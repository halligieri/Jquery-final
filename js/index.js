
function editarNota(id) {
  var nota;
  for (var i = 0; i < localStorage.length; i++) {
    var clave = localStorage.key(i);
    if(clave == id) {
       nota = $.parseJSON(localStorage.getItem(clave));

      $("#id").val(nota.id);
      $("#nombre").val(nota.nombre);
      $("#nota1").val(nota.nota1);
    }
  }
}

//------------------------------------------------

function listarNotas(id) {
  var tabla ="";


    tabla += '<table border = "1">';
    tabla += '<tr>';
    tabla += '<th>Id</th>';
    tabla += '<th>Nombre</th>';
    tabla += '<th>Nota</th>';
    tabla += '<th>Editar</th>';
    tabla += '<th>Eliminar</th>';
    tabla += '</tr>';

      for (var i = 0; i < localStorage.length; i++) {
        var clave = localStorage.key(i);
              nota = $.parseJSON(localStorage.getItem(clave));

          tabla +='<tr>';
          tabla +='<td>'+nota.id+'</td>';
          tabla +='<td>'+nota.nombre+'</td>';
          tabla +='<td>'+nota.nota1+'</td>';
          tabla +='<td><button onclick="editarNota(\''+nota.id+'\');">Editar</button></td>';
          tabla +='<td><button onclick="eliminarNota(\''+nota.id+'\');">Eliminar</button></td>';
          tabla +='</tr>';
      }
      tabla+='</tabla>';
      $("#p1").html(tabla);
}

function eliminarNota(id) {
  localStorage.removeItem(id);
  listarNotas();
}

//------------------------------------------

function notaMayor(){

  var max1 = 0;
      for (var i = 0; i < localStorage.length; i++) {
        var clave = localStorage.key(i);
              estudiantes =$.parseJSON(localStorage.getItem(clave));
              if (estudiantes.nota1>max1) {
                max1 = estudiantes.nota1;
                }

              }


alert("La Nota maxima es: "+ max1);
}



//-----------------------------------
function notaMenor(){
  var min =100;
      for (var i = 0; i < localStorage.length; i++) {
        var clave = localStorage.key(i);
              estudiantes =$.parseJSON(localStorage.getItem(clave));
              if (estudiantes.nota1<min) {

                min = estudiantes.nota1;
              }

            }


alert("La Nota menor es: "+ min);

 }

//-----------------------------------
  function Promedio() {
    var total=0;
    var promedio = 0;
    var promedio1 = 0;

    for (var i = 0; i < localStorage.length; i++) {
      var clave = localStorage.key(i);
            nota = $.parseJSON(localStorage.getItem(clave));
            total += nota.nota1;
            promedio = total/localStorage.length;
            promedio1 = promedio.toPrecision(4);

          }
          alert("El promedio de notas es: " + promedio1);
  }
//-----------------------------------



$(document).ready(function() {

  var contador;
  if(localStorage.length>0) {
    contador = localStorage.length + 1;
  }else{
    contador =1;
  }

  $("#id").val(contador);

  function restablecer() {
    $("#id").val(contador);
    $("#nombre").val("");
    $("#nota1").val("");
  }

  $("#boton1").click(function() {
    var id =$("#id").val();
    var nombre =$("#nombre").val();
    var nota01 =$("#nota1").val();
    var nota1 = parseFloat(nota01);
    if (isNaN(nota1)){
  		alert("La nota debe ser un numero");
  		return;
  	}
  	else{

    var nota = {
      id:id,
      nombre:nombre,
      nota1:nota1
    };
    localStorage.setItem(id,JSON.stringify(nota));
    contador = localStorage.length + 1;
    function Promedio(){
    total = localStorage.nota1;
    alert(total);
    }

      listarNotas(id);
      restablecer();
   }
  });

  $("#boton2").click(function() {
      restablecer();
  });
  listarNotas(id);
  $("#nombre").val();

  $("#boton3").click(function() {
    notaMenor();
  });

  $("#boton4").click(function() {
    notaMayor();
  });

  $("#boton5").click(function() {
    Promedio();
  });


});
