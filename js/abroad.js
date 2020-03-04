$(document).ready(function(){
   

    $("#sign").click(function(event) {
     $("#job").hide();
     $(".create1").slideDown('1000');
    })
   $("#job").click(function() {
        $("#sign").hide("1500");
        $(".create2").slideDown('1000');
        
    })
    $(".cancelbtn").click(function(event) {
        $(".create2").hide("1500");
        $("#job").hide();
        $(".create1").slideDown("1000")
    })

    $("#cancelbtn").click(function(event) {
       $(".create1").hide("1500");
       $("#job").slideDown("1000");
       $("#sign").slideDown("1000")
   })
    event.preventDefault()
})