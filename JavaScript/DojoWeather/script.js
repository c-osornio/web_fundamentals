var id = document.querySelector("#pop-up");

function hide() {
    id.remove();
}

var select = document.querySelector()

function switchTemp(temp) {
    if (temp.value === "°F") {
        document.querySelector("#today-m").innerHTML = 75 + "°";
        document.querySelector("#tom-m").innerHTML = 80 + "°";
        document.querySelector("#fri-m").innerHTML = 69 + "°";
        document.querySelector("#sat-m").innerHTML = 78 + "°";
        document.querySelector("#today-n").innerHTML = 65 + "°";
        document.querySelector("#tom-n").innerHTML = 66 + "°";
        document.querySelector("#fri-n").innerHTML = 61 + "°";
        document.querySelector("#sat-n").innerHTML = 70 + "°";
    } else {
        document.querySelector("#today-m").innerHTML = 24 + "°";
        document.querySelector("#tom-m").innerHTML = 27 + "°";
        document.querySelector("#fri-m").innerHTML = 21 + "°";
        document.querySelector("#sat-m").innerHTML = 26 + "°";
        document.querySelector("#today-n").innerHTML = 18 + "°";
        document.querySelector("#tom-n").innerHTML = 19 + "°";
        document.querySelector("#fri-n").innerHTML = 16 + "°";
        document.querySelector("#sat-n").innerHTML = 21 + "°";
    }
}
