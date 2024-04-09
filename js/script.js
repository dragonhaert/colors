colorValues = {
    red: 0,
    green: 0,
    blue: 0
}

function updateBackground() {
    document.body.style.backgroundColor = "rgb(" + colorValues.red + "," + colorValues.green + "," + colorValues.blue + ")";
}

function updateInputs() {
    document.getElementById('redSlider').value = colorValues.red;
    document.getElementById('redInput').value = colorValues.red;
    document.getElementById('greenSlider').value = colorValues.green;
    document.getElementById('greenInput').value = colorValues.green;
    document.getElementById('blueSlider').value = colorValues.blue;
    document.getElementById('blueInput').value = colorValues.blue;
}

function triggerInput(color) {
    if (document.getElementById(`${color}Input`).value > 255) document.getElementById(`${color}Input`).value = 255;
    else if (document.getElementById(`${color}Input`).value < 0) document.getElementById(`${color}Input`).value = 0;
    colorValues[color] = document.getElementById(`${color}Input`).value;
    document.getElementById(`${color}Slider`).value = colorValues[color];
    updateBackground();
}

function triggerSlider(color) {
    colorValues[color] = document.getElementById(`${color}Slider`).value;
    document.getElementById(`${color}Input`).value = colorValues[color]
    updateBackground();
}

function randomize() {
    colorValues.red = Math.round(Math.random() * 255 + 1);
    colorValues.green = Math.round(Math.random() * 255 + 1);
    colorValues.blue = Math.round(Math.random() * 255 + 1);
    updateInputs();
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