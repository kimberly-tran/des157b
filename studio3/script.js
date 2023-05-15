const playButton = document.querySelector('#play');
const closeButton = document.querySelector('.fa-xmark');
const overlay = document.querySelector('#overlay');
const pencil = document.querySelector('.fa-pencil');
const eraser = document.querySelector('.fa-eraser');
let canvas;

playButton.addEventListener('click', function() {
    overlay.className = "showing";
});

closeButton.addEventListener('click', function() {
    overlay.className = "hidden";
});

function setup() {
    let canvas = createCanvas(600, 400);
    canvas.parent('canvasContainer');
}

// draw on canvas

function draw() {
    if (mouseIsPressed) {
        stroke(0);
        strokeWeight(5); 
        smooth();
    }
    else {
        noStroke();
    }
    line(mouseX, mouseY, pmouseX, pmouseY);
}

// erase
eraser.addEventListener('click', function(){
    erase();
    strokeWeight(10); 
})

// back to drawing
pencil.addEventListener('click', function(){
    noErase();
    draw();
});
