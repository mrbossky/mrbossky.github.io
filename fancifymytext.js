
function HelloWorld() {
    alert("Hello, world!");
}
function increaseFont() {
    document.getElementById("textBox").style.fontSize = "24pt";
}

function applyStyles() {
    let textBox = document.getElementById("textBox");

    textBox.style.fontWeight = "bold";
    textBox.style.color = "blue";
    textBox.style.textDecoration = "underline";
}

function removeStyles() {
    let textBox = document.getElementById("textBox");

    textBox.style.fontWeight = "normal";
    textBox.style.color = "";
    textBox.style.textDecoration = "";
}

function upperCase() {
    let textBox = document.getElementById("textBox");
    let upperText = textBox.value.toUpperCase();
    let parts = upperText.split(".");

    for (let i = 0; i < parts.length; i++) {
        if (parts[i].trim().length > 0) {
            parts[i] = parts[i].trim() + "-Moo";
        }
    }

    upperText = parts.join(". ");
    textBox.value = upperText;
}
