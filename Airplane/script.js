var player = {
    left: 1150,
    top: 900
}

var enemies = [
    { left: 1020, top: 250 },
    { left: 750, top: 250 },
    { left: 1350, top: 300 },
    { left: 1260, top: 280 },
    { left: 1250, top: 200 },
    { left: 900, top: 280 },
    { left: 1150, top: 100 },
    { left: 360, top: 280 },
    { left: 410, top: 200 },
    { left: 900, top: 280 },
    { left: 1900, top: 280 },
    { left: 1280, top: 100 },
    { left: 1560, top: 220 },
    { left: 1410, top: 200 },
    { left: 2000, top: 250 }
]

var missiles = [];


function drawPlayer() {
    content = "<div class='player' style='left:" + player.left + "px; top:" + player.top + "px'></div>";
    document.getElementById("players").innerHTML = content;
}


function drawEnemies() {
    content = "";
    for (var idx = 0; idx < enemies.length; idx++) {
        content += "<div class='enemy' style='left:" + enemies[idx].left + "px; top:" + enemies[idx].top + "px'></div>";
        document.getElementById("enemies").innerHTML = content;
    }
}

function drawMissiles() {
    content = "";
    for (var idx = 0; idx < missiles.length; idx++) {
        content += "<div class='missile' style='left:" + missiles[idx].left + "px; top: " + missiles[idx].top + "px'></div>"
        document.getElementById("missiles").innerHTML = content;
    }
}

function moveEnemies() {
    for (var idx = 0; idx < enemies.length; idx++) {
        enemies[idx].top = enemies[idx].top + 1;
    }
}

function moveMissiles() {
    for (var idx = 0; idx < missiles.length; idx++) {
        missiles[idx].top = missiles[idx].top - 5;
    }
}

document.onkeydown = function (e) {
    if (e.keyCode == 37 && player.left > 200) { // left
        player.left = player.left - 10;
    }
    if (e.keyCode == 39 && player.left < 2100) { // right
        player.left = player.left + 10;
    }
    if (e.keyCode == 38 && player.top > 700) { //  up
        player.top = player.top - 10;
    }
    if (e.keyCode == 40 && player.top < 980) { // down
        player.top = player.top + 10;
    }
    if (e.keyCode == 32) { // fire
        missiles.push({ left: (player.left + 50), top: (player.top - 20) })
        drawMissiles();
    }
    drawPlayer();
}

function gameLoop() {
    drawPlayer();

    moveEnemies();
    drawEnemies();

    moveMissiles();
    drawMissiles();

    setTimeout(gameLoop, 5)
}
gameLoop();



