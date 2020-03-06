$(function() {

    $('.cntnu-btn').click(function fadeAlert() {

        $('#welcome').slideUp(1000);

    });

    //  contact icons to visible

    $(".reveal-contacts").click(function() {

        $(".icon-container").toggleClass("reveal");

        $(".reveal-contacts").toggleClass("rvl-anim")

    })

})