//creer trois variables qui ont chacunes un chiffres aléatoire
let color1 = Math.floor(Math.random()*255);
let color2 = Math.floor(Math.random()*255);
let color3 = Math.floor(Math.random()*255);

//donnons une couleur en RGB au body
document.body.style.background = "rgb(140, 233, 222";

document.body.innerHTML = `<h1>RGB (${color1}, ${color2}, ${color3})</h1>`
