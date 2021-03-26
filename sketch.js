var canvas;
var music;
var boxe;
var plat1, plat2, plat3, plat4;

function preload(){

    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);

    boxe = createSprite(random(20, 750), 300, 20, 20);
    boxe.shapeColor = "cyan";
    boxe.velocityX = 4;
    boxe.velocityY = 5;

    plat1 = createSprite(105, 500, 150, 20);
    plat2 = createSprite(305, 500, 150, 20);
    plat3 = createSprite(505, 500, 150, 20);
    plat4 = createSprite(705, 500, 150, 20);
    plat1.shapeColor = "blue";
    plat2.shapeColor = "yellow";
    plat3.shapeColor = "green";
    plat4.shapeColor = "red";

}

function draw() {

    background(rgb(169,169,169));

    var edges = createEdgeSprites();

    boxe.bounceOff(edges);

    if (boxe.isTouching(plat1) && boxe.bounceOff(plat1)) {

        boxe.shapeColor = "blue";

    }

    if (boxe.isTouching(plat2) && boxe.bounceOff(plat2)) {

        boxe.shapeColor = "yellow";

    }

    if (boxe.isTouching(plat3) && boxe.bounceOff(plat3)) {

        boxe.shapeColor = "green";

    }

    if (boxe.isTouching(plat4) && boxe.bounceOff(plat4)) {

        boxe.shapeColor = "red";

    }

    music.play();

    drawSprites();

}
