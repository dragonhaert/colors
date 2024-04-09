let redValue = 0;
let greenValue = 0;
let blueValue = 0;

function rgb() {
    return "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
}

function updateBackground() {
    document.body.style.backgroundColor = rgb();
}

function updateInputs() {
    document.getElementsByClassName('red').value = redValue;
    document.getElementsByClassName('green').value = greenValue;
    document.getElementsByClassName('blue').value = blueValue;
}

function redInput() {
    if (document.getElementById('redInput').value > 255) document.getElementById('redInput').value = 255;
    else if (document.getElementById('redInput').value < 0) document.getElementById('redInput').value = 0;
    redValue = document.getElementById('redInput').value;
    document.getElementById('redSlider').value = redValue;
    updateBackground();
}

function redSlider() {
    redValue = document.getElementById('redSlider').value;
    document.getElementById('redInput').value = redValue
    updateBackground();
}


function greenInput() {
    if (document.getElementById('greenInput').value > 255) document.getElementById('greenInput').value = 255;
    else if (document.getElementById('greenInput').value < 0) document.getElementById('greenInput').value = 0;
    greenValue = document.getElementById('greenInput').value;
    document.getElementById('greenSlider').value = greenValue;
    updateBackground();
}

function greenSlider() {
    greenValue = document.getElementById('greenSlider').value;
    document.getElementById('greenInput').value = greenValue;
    updateBackground();
}
function blueInput() {
    if (document.getElementById('blueInput').value > 255) document.getElementById('blueInput').value = 255;
    else if (document.getElementById('blueInput').value < 0) document.getElementById('blueInput').value = 0;
    blueValue = document.getElementById('blueInput').value;
    document.getElementById('blueSlider').value = blueValue;
    updateBackground();
}

function blueSlider() {
    blueValue = document.getElementById('blueSlider').value;
    document.getElementById('blueInput').value = blueValue;
    updateBackground();
}

function randomize() {
    redValue = Math.round(Math.random() * 255 + 1);
    document.getElementById('redInput').value = redValue;
    document.getElementById('redSlider').value = redValue;
    greenValue = Math.round(Math.random() * 255 + 1);
    document.getElementById('greenInput').value = greenValue;
    document.getElementById('greenSlider').value = greenValue;
    blueValue = Math.round(Math.random() * 255 + 1);
    document.getElementById('blueInput').value = blueValue;
    document.getElementById('blueSlider').value = blueValue;
    updateBackground();
}

window.addEventListener('load', () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/colors/sw.js',{scope: '/colors/'})
            .then( registration => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch(err => {
            console.log('ServiceWorker registration failed: ', err);
        });
    }
 });   