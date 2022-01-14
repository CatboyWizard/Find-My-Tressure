var x = Mordor

var y = Rhohan 


// var x = document.getElementById("header");

// var x = document.createElement("header")

// document.getElementById('header')

    // alert(myWeight)
    // test = parseFloat(myHeight) * parseFloat(myWeight);

function myFunction() {

    var myHeight, myAnswer;
    
    myHeight = document.getElementById('height').value;

    myAnswer = document.getElementById("answer").value;

    // var bmi = (parseFloat(myAnswer)/parseFloat(myHeight) * parseFloat(myHeight))* 703

    // test = parseFloat(myHeight) * parseFloat(myAnswer);

    // alert(bmi)

    if (myAnswer < 115) {
        document.getElementById("answer").innerHTML = "Your Found my tressuer!";
    } else if (myAnswer > 145) {
        document.getElementById("answer").innerHTML ="Your to Far!";
    } else{
        document.getElementById("answer").innerHTML = "Your almost there!";
    }
};
