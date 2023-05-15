const play = document.querySelector('#close');
const howToPlay = document.querySelector('#open');
let canvas;
let charAX = 150;
let charAY = 350;
let charBX = 600;
let charBY = 350;

play.addEventListener('click', function() {
    popup.className = "hidden";
});

howToPlay.addEventListener('click', function() {
    popup.className = "showing";
});

function setup() {
    let canvas = createCanvas(800, 500);
    canvas.parent('canvasContainer');
}

function draw() {
// background color
background('#a7d4ff');

// creating ground
noStroke();
fill('#45b82b');
rect(0, 200, 800, 300); 


//create charA
fill('#222');
rect(charAX, charAY, 50, 50)

//create charB
fill('#FFF');
rect(charBX, charBY, 50, 50)

//tag popup text
if(dist(charAX, charAY, charBX, charBY) < 50) {
    textSize(36);
    text("TAG", 400, 200)
}
}

function keyPressed (event) {
    let key = event.key;
    // key.addEventListener('keydown', function() {
    //     if (key == "a") {
    //         newCharBX = charBX - 10;
    //         charBX = newCharBX;
    //     }
    // });
    
    //charB keys
    if (key == "d") {
        newCharBX = charBX + 10;
        charBX = newCharBX;
    }
    if (key == "a") {
        newCharBX = charBX - 10;
        charBX = newCharBX;
    }
    if (key == "w") {
        newCharBY = charBY - 10;
        charBY = newCharBY;
    }
    if (key == "s") {
        newCharBY = charBY + 10;
        charBY = newCharBY;
    }

    //charA keys
    if (key == "ArrowRight") {
        newCharAX = charAX + 10;
        charAX = newCharAX;
    }
    if (key == "ArrowLeft") {
        newCharAX = charAX - 10;
        charAX = newCharAX;
    }
    if (key == "ArrowUp") {
        newCharAY = charAY - 10;
        charAY = newCharAY;
    }
    if (key == "ArrowDown") {
        newCharAY = charAY + 10;
        charAY = newCharAY;
    }
}