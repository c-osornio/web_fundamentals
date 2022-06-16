function hide(element) {
    element.remove();
}

var likes = 0;
var span = document.querySelector("#likes")


function like() {
    likes++;
    span.innerText = likes;
    console.log(likes)
}