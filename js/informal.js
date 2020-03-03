$(document).ready(function(){
     

     $("#sign").click(function(event) {
      $("#job").hide();
      $(".create1").slideDown('1000');
     })
    $("#job").click(function() {
         $("#sign").hide("1500");
         $(".create2").slideDown('1000')
     })
//      event.preventDefault()
 })