alert("Coded by Eduardo Cavalcante.");
var email;
var name;
var message;

function send() {
    email = document.getElementById("email").value;
    name = document.getElementById("name").value;
    message = document.getElementById("message").value;
    alert(name + ", your message has been sended. Thanks.");
    document.getElementById("p").innerHTML = "Your feedback: " + message;
    document.getElementById("email").value = "";
    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
}