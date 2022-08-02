function isname() {
    var x = document.getElementById("fName").value;
    var z = 0;
    z = /\d/.test(x);
    if (z == 0) {
        document.getElementById("nameWarning").innerHTML = ""
    } else {
        document.getElementById("nameWarning").innerHTML = "Name cannot contain number !"

    }
}


function isn() {
    var ph = document.getElementById("phone").value;
    var z = isNaN(ph)
    if (z == 1) {
        document.getElementById("phnWarning").innerHTML = "Contact must be numeric !";
    } else {
        document.getElementById("phnWarning").innerHTML = "";
    }
}

function isTen() {
    var x = document.getElementById("phone").value;
    var len = x.length;
    if (len == 0) {
        document.getElementById("phnWarning").innerHTML = "Phone no cannot be empty";
    } else if (len < 10 || len > 10) {
        document.getElementById("phnWarning").innerHTML = "Phone no must be 10 digit.";
    } else {
        document.getElementById("phnWarning").innerHTML = "";
    }
}

function isMail() {
    var x = document.getElementById("mail").value;
    var len = x.length;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x) || len == 0) {
        document.getElementById("mWarning").innerHTML = "";
    } else {
        document.getElementById("mWarning").innerHTML = "Enter a valid e mail";
    }
}

function isempty(){
    var x= document.getElementById("subject").value.length;
    var m= document.getElementById("message").value.length;
    var n = document.getElementById("fName").value.length;

    if(n==0){
        document.getElementById("nameWarning").innerHTML = "Name cannot be empty"
    }else{
        document.getElementById("nameWarning").innerHTML = ""
    }

    if(x==0){
        document.getElementById("subWarning").innerHTML = "Please enter the subject";
    }else{
        document.getElementById("subWarning").innerHTML = "";
    }

    if(m==0){
        document.getElementById("msgWarning").innerHTML = "It's better to add a massage. Even though you can submit without one.";
    }else{
        document.getElementById("msgWarning").innerHTML = "";
    }
}