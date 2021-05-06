var habilidades ="<h2 class='col-12 text-center'>Habilidades</h2>";
let misHabilidades=[new Object({habilidad:'HTML',nivel:0.2}),new Object({habilidad:'CSS',nivel:0.1}),new Object({habilidad:'JavaScript',nivel:0.1}),new Object({habilidad:'Git',nivel:0.1}),new Object({habilidad:'Java',nivel:0.2})];
misHabilidades.forEach(function(elemento) {
  habilidades+="<div class='row'>"+
  "<div class='col-xl-12'>"+
    "<spam class='col-xl-3 col-lg-3 text-center'>"+elemento.habilidad+": </spam>"+
    "<meter class='col-xl-9 col-lg-9' value='"+elemento.nivel+"'></meter>"+
  "</div>"+
"</div>";
});


$(document).ready(function(){
    $(".Principal").click(function(){
      $(".img-container").html("<div class='img-container d-flex-justify-content-text text-center'> <img src='img/mifoto.jpg' alt=''> </div>");
    });
    $(".Habilidades").click(function(){     
      alert("Estas son las habilidades");
        $(".img-container").html(habilidades);
      });
  });