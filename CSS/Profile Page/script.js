console.log("Connected to JS")
var username = document.querySelector("#name");
var request1 = document.querySelector(".new-request");
var request2 = document.querySelector(".new-request2");
var requests = document.querySelector("#pending-requests");
var pendingRequests = 2;
var connections = 418;

function changeName() {
    username.innerHTML = "Mrs. Jane Doe";
}

function hide(request) {
    request.remove();
}

function removePending() {
    pendingRequests--;
    requests.innerHTML = pendingRequests;
}

function addConnection() {
    connections++
    document.querySelector("#connections").innerHTML = connections;
}