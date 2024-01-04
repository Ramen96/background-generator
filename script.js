var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("Random");


function setGradient() {
    body.style.background = "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    ")";

    css.textContent = body.style.background + ";";
}

const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };

function genRanHex() {
    body.style.background = "linear-gradient(to right, "
    + random_hex_color_code()
    + ", "
    + random_hex_color_code()
    ")";
        
    css.textContent = body.style.background + ";";
    console.log(genRanHex(6));
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", genRanHex);

genRanHex();
