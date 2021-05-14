var db;
var form, game, player;
var gamestate = 0;
var playercount = 0;
var allPlayers;
var car1, car2, car3, car4, car5;
var cars;
var c1Image, c2Image, c3Image, c4Image, c5Image; 
var trackImage;

function preload(){
    //c1Image = loadImage("car1.png");
    c2Image = loadImage("car2.png");
    c3Image = loadImage("car3.png");
    c4Image = loadImage("car4.png");
    c5Image = loadImage("car5.png");
    trackImage = loadImage("track.jpg");
}
function setup(){
    createCanvas(displayWidth, displayHeight);
    db = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if(playercount === 4){
        game.update(1);
    }
    if(gamestate === 1){
        clear();
        game.play();
    }
    if(gamestate === 2){
        game.end();
    }
}
