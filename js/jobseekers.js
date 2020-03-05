 function salidate(){
const FirstName = document.getElementById("FirstName").value;
const SecondName = document.getElementById("SecondName").value;
const Age = document.getElementById("Age").value;
const Phone = document.getElementById("PhoneNumber").value;
const EducationLevel = document.getElementById("EducationLevel").value;

if(FirstName !== "" && SecondName !== "" && Age!=="" && Phone!=="" && EducationLevel!==""){
    alert("All details filled");
    
  }
  else {
  alert("Form is incomplete");
  someName();
  }
}

// function releaseEvents(){

  $(document).ready(function(){
$("#submit3").click(function(event){
    event.preventDefault()
    $(".form").toggle(1000)
    $(".form2").toggle(1000)
  }); 

  $("#submit1").click(function(event){
    event.preventDefault()
    $(".form2").hide(2000);
    $(".form3").show(2000); 
  });
 });


function someName(){

var total=0;
var answer1 = document.getElementById("answer1").value;
var answer = document.getElementById("answer").value;
var answer2 = document.getElementById("answer2").value;

  if(answer === "" || answer1 === "" || answer2 ===""){
    alert("Please answer all questions");
    
    }
    else{
      alert("We moving on");

    }
  }
