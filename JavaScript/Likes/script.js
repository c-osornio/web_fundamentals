var likes = [9, 12, 9]
var spans = [document.querySelector("#post-1"), document.querySelector("#post-2"), document.querySelector("#post-3")];

function addLike(id) {
    likes[id]++;
    spans[id].innerText = likes[id] + " like(s)";
}