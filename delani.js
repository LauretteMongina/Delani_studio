// what we do
$(document).ready(function(){

  $("#product_image").click(function(){
    $('#product').show();
    $('#product_image').hide();
  });
  $("#product").click(function(){
    $('#product_image').show();
    $('#product').hide();
  });

  $("#design_image").click(function(){
    $('#design').show();
    $('#design_image').hide();
  });
  $("#design").click(function(){
    $('#design_image').show();
    $('#design').hide();
  });

  $("#development_image").click(function(){
    $('#development').show();
    $('#development_image').hide();
  });
  $("#development").click(function(){
    $('#development_image').show();
    $('#development').hide();
  });
// portfolio
  $("#work1").hover(
    function () {
      $(this).addClass("overlay");
      $(".overlay1").show();
    },
    function () {
      $(".overlay1").hide();
    }
  );
  $("#work2").hover(
    function () {
      $(this).addClass("overlay");
      $(".overlay2").show();
    },
    function () {
      $(".overlay2").hide();
    }
  );
  $("#work3").hover(
    function () {
      $(this).addClass("overlay");
      $(".overlay3").show();
    },
    function () {
      $(".overlay3").hide();
    }
  );
  $("#work4").hover(
    function () {
      $(this).addClass("overlay");
      $(".overlay4").show();
    },
    function () {
      $(".overlay4").hide();
    }
  );
  $("#work5").hover(
    function () {
      $(this).addClass("overlay");
      $(".overlay5").show();
    },
    function () {
      $(".overlay5").hide();
    }
  );
  $("#work6").hover(
    function () {
      $(this).addClass("overlay");
      $(".overlay6").show();
    },
    function () {
      $(".overlay6").hide();
    }
  );
  $("#work7").hover(
    function () {
      $(this).addClass("overlay");
      $(".overlay7").show();
    },
    function () {
      $(".overlay7").hide();
    }
  );
  $("#work8").hover(
    function () {
      $(this).addClass("overlay");
      $(".overlay8").show();
    },
    function () {
      $(".overlay8").hide();
    }
    );
// Back-end
  function getInput(){
    var name = document.getElementById("name").value;
    var email = document.getElementB("email").value;
    var text  = document.getElementById("message").value;
// check for inputs

        if(name == ""){
        return alert("Input name");
     }
        else if(email == ""){
        return alert("Input valid email")
     }
     else{
       return alert("Hey" + name + "we have received your message. Thank you for reaching out")
     }
    }
  });