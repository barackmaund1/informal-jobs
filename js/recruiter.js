$(document).ready(function() {
    $('#register-button').on('click', function() {
        $("#services-row").show(2000)
        $("#register_form").hide(2000)
    });
});
  function validate(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Thank you for your Options we will contact you',
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true
      }, function () {
        setTimeout(function () {
          swal("Ajax request finished!");
        }, 2000);
      });
      
  }

  function validate(){
    var user = document.getElementById('firstn').value;

    if(user == ""){
        document.getElementById('firstn').innerHTML = "Please enter your firstname";
        return false;
    }
  }