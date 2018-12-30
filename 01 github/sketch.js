/*
Connor McGaffin
Section C
cmcgaffi@andrew.cmu.edu
Project-09
*/
 
var nick;
var i = 17.5;
var circ = i / 2; 

function preload() {
    var myImageURL = "https://i.imgur.com/v0CY2zp.jpg";
    nick = loadImage(myImageURL);
}

function setup() {
    createCanvas(480, 480);
    nick.loadPixels();
    frameRate(2);
    noStroke();
}

function draw() {
    gridImg();
    bar();
    repaint();
}

function bar() {
    if(mouseIsPressed){
        fill(0, 45, 80);
        rect(0, 0, width, 2 * i);
    } else {
        fill(0, 80, 45);
        rect(0, 0, width, 2 * i);
    }
}

function repaint(){
    if(mouseIsPressed){
        for(var px = 0; px < width; px += i){
            for(var py = 2 * i; py < height; py += i){
                fill(random(0,20),random(50,90),random(50,110));
                ellipse(px + (i / 2), py + (i / 2), circ);
            }
        }
    }
}

function gridImg() {
    for(var px = 0; px < width; px += i){
        for(var py = 0; py < height; py += i){
            var ix = constrain(floor(px), 0, width - 1);
            var iy = constrain(floor(py), 0, height - 1);
            var theColorAtLocationXY = nick.get(ix, iy);
            fill(theColorAtLocationXY);
            rect(px, py, i, i);
            fill(random(0,20),random(50,110),random(50,90));
            ellipse(px + (i / 2), py + (i / 2), circ);
        }
    }
}




