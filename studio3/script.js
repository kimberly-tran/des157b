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
background('#7CD0FF');

// creating ground
noStroke();
fill('#86dc36');
rect(0, 200, 800, 300); 


//create charA
fill('#ffdf11');
rect(charAX, charAY, 50, 50)
    //nose
fill('#fd9400');
rect(charAX+25, charAY+20, 10, 10)
    //eyes
fill('#222');
rect(charAX+15, charAY+15, 5, 5)
fill('#222');
rect(charAX+40, charAY+15, 5, 5)
    //feet
fill('#fd9400');
rect(charAX+10, charAY+45, 10, 5)
fill('#fd9400');
rect(charAX+35, charAY+45, 10, 5)


//create charB
fill('#fffefb');
rect(charBX, charBY, 50, 50)
    //nose
fill('#fd9400');
rect(charBX+15, charBY+20, 10, 10)
    //eyes
fill('#222');
rect(charBX+5, charBY+15, 5, 5)
fill('#222');
rect(charBX+30, charBY+15, 5, 5)
    //feet
fill('#fd9400');
rect(charBX+5, charBY+45, 10, 5)
fill('#fd9400');
rect(charBX+30, charBY+45, 10, 5)

//tag popup text
if(dist(charAX, charAY, charBX, charBY) < 50) {
    fill('#222');
    textSize(36);
    textFont('VT323')
    text("TAG", (charAX+charBX)/2, ((charAY+charBY)/2)-15)
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
    if (key == "ArrowRight") {
        newCharBX = charBX + 10;
        charBX = newCharBX;
    }
    if (key == "ArrowLeft") {
        newCharBX = charBX - 10;
        charBX = newCharBX;
    }
    if (key == "ArrowUp") {
        newCharBY = charBY - 10;
        charBY = newCharBY;
    }
    if (key == "ArrowDown") {
        newCharBY = charBY + 10;
        charBY = newCharBY;
    }

    //charA keys
    if (key == "d") {
        newCharAX = charAX + 10;
        charAX = newCharAX;
    }
    if (key == "a") {
        newCharAX = charAX - 10;
        charAX = newCharAX;
    }
    if (key == "w") {
        newCharAY = charAY - 10;
        charAY = newCharAY;
    }
    if (key == "s") {
        newCharAY = charAY + 10;
        charAY = newCharAY;
    }

    // console.log(key);
}