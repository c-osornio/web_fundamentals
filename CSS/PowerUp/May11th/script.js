var whatIWantToChange = document.getElementById("whatIWantToChange");

// You can use query selector but its more of a sniper approach the way we do it here

function myFunction(element) {
    console.log("My myFunction is working!")
    console.log(element);
    element.style.color = "red";
    element.style.fontSize = "25pt";
}

function myOtherFunction(myString) {
    console.log("banana and mango");
    var element = document.getElementById(myString);
    console.log(element);
    element.style.color = "red";
}

function myIfFunction(element) {
    if (element.style.color == "" || element.style.color == "blue") {
        element.style.color = "green";
    }
    else {
        element.style.color = "blue";
    }
}
