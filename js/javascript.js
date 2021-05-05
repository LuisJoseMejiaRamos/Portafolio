var habilidades ="<h2 class='col-12 text-center'>Habilidades</h2>"+
"<div class='col-xl-12'><spam class='col-xl-3 col-lg-3 text-center'>HTML: </spam>"+
"<meter class='col-xl-9 col-lg-9' value='0.2'></meter> <div/>";


$(document).ready(function(){
    $(".Principal").click(function(){
      $(".img-container").html("<div class='img-container d-flex-justify-content-text text-center'> <img src='img/mifoto.jpg' alt=''> </div>");
    });
    $(".Habilidades").click(function(){
        alert("Estas son las habilidades");
        $(".img-container").html(habilidades);
      });
  });