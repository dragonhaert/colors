colorValues = {
    redValue: 0,
    greenValue: 0,
    blueValue: 0
}

function rgb() {
    return "rgb(" + colorValues.redValue + "," + colorValues.greenValue + "," + colorValues.blueValue + ")";
}

function updateBackground() {
    document.body.style.backgroundColor = rgb();
}

function updateInputs() {
    document.getElementById('redSlider').value = colorValues.redValue;
    document.getElementById('redInput').value = colorValues.redValue;
    document.getElementById('greenSlider').value = colorValues.greenValue;
    document.getElementById('greenInput').value = colorValues.greenValue;
    document.getElementById('blueSlider').value = colorValues.blueValue;
    document.getElementById('blueInput').value = colorValues.blueValue;
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
    colorValues.redValue = Math.round(Math.random() * 255 + 1);
    colorValues.greenValue = Math.round(Math.random() * 255 + 1);
    colorValues.blueValue = Math.round(Math.random() * 255 + 1);
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