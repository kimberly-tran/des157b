async function getData() {
    const food = await fetch('data/food.json');
    const data = await food.json();
    console.log(data);
    document.querySelector('#time').innerHTML = outputTime(data);
    document.querySelector('#time').textContent = "9:00 AM"; 
    document.querySelector('#image').innerHTML = outputImage(data);
    document.querySelector('#food').innerHTML = outputFood(data);
    document.querySelector('#food').textContent = "pre party set-up";
    document.querySelector('#descrgiption').innerHTML = outputDescription(data);
    document.querySelector('#description').textContent = "";
}

let time = document.querySelector('#time');
let image = document.querySelector('#image');
let food = document.querySelector('#food');
let description = document.querySelector('#description');

const increaseTime = document.querySelector('.fa-caret-up');
const decreaseTime = document.querySelector('.fa-caret-down');

function outputTime(data) {
    const dataPoints = Object.keys(data);
    // console.log(dataPoints[0]);
    // console.log(dataPoints.indexOf('food1'));
    let index = dataPoints.indexOf('food1')-1;
    increaseTime.addEventListener('click', function(){
        for (let i = index+1; i < dataPoints.length; i++) {
            console.log(data[dataPoints[i]].time)
            time.innerHTML = `<h2 id="time">${data[dataPoints[i]].time}</h2>`;
            // let html = '<p>';
            // html += `hi ${data[dataPoints[i]].time}`;
            // html += '<p>';
            index = index + 1;
            return time;
            // console.log(dataPoints.indexOf(i));
        }
    });
    decreaseTime.addEventListener('click', function(){
        for (let i = index-1; i >= 0; i--) {
            console.log(data[dataPoints[i]].time)
            time.innerHTML = `<h2 id="time">${data[dataPoints[i]].time}</h2>`;
            index = index - 1;
            return time;
        }
    });
}

function outputImage(data) {
    const dataPoints = Object.keys(data);
    let index = dataPoints.indexOf('food1')-1;
    // increaseTime.addEventListener('click', function(){
    //     for (let i = index+1; i < dataPoints.length; i++) {
    //         console.log(data[dataPoints[i]].image)
    //         // let image = '<img';
    //         // image += `src="images/${data[dataPoints[i]].image}.png"`;
    //         // image += `alt ="drawing of food desccribed" width="400" id="image">`;
    //         // image.innerHTML = `<img src="images/${data[dataPoints[i]].image}.png" alt ="drawing of food desccribed" width="400" id="image">`;
    //         index = index + 1;
    //         return image;
    //     }
    // });

    increaseTime.addEventListener('click', function() {
        for (let i = index+1; i < dataPoints.length; i++) {
            image.src = `images/${data[dataPoints[i]].image}.png`;
            index = index + 1;
            return image;
          }
    });
    decreaseTime.addEventListener('click', function(){
        for (let i = index-1; i >= 0; i--) {
            image.src = `images/${data[dataPoints[i]].image}.png`;
            index = index - 1;
            return image;
          }
        });
}

function outputFood(data) {
    const dataPoints = Object.keys(data);
    let index = dataPoints.indexOf('food1')-1;
    increaseTime.addEventListener('click', function(){
        for (let i = index + 1; i < dataPoints.length; i++) {
            console.log(data[dataPoints[i]].food)
            food.innerHTML = `<p id="food">${data[dataPoints[i]].food}</p>`;
            index = index + 1;
            return food;
        }
    });
    decreaseTime.addEventListener('click', function(){
        for (let i = index-1; i >= 0; i--) {
            console.log(data[dataPoints[i]].food)
            food.innerHTML = `<p id="food">${data[dataPoints[i]].food}</p>`;
            index = index - 1;
            return food;
        }
    });
}

function outputDescription(data) {
    const dataPoints = Object.keys(data);
    let index = dataPoints.indexOf('food1')-1;
    increaseTime.addEventListener('click', function(){
        for (let i = index + 1; i < dataPoints.length; i++) {
            console.log(data[dataPoints[i]].reason)
            description.innerHTML = `<p id="food">${data[dataPoints[i]].reason}</p>`;
            index = index + 1;
            return description;
        }
    });
    decreaseTime.addEventListener('click', function(){
        for (let i = index-1; i >= 0; i--) {
            console.log(data[dataPoints[i]].reason)
            description.innerHTML = `<p id="food">${data[dataPoints[i]].reason}</p>`;
            index = index - 1;
            return description;
        }
    });
}

getData();