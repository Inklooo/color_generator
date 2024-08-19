//fonction pour changer la couleur
function colorChange() {
  //creer trois variables qui ont chacunes un chiffres aléatoire
  const color1 = Math.floor(Math.random()*255);
  const color2 = Math.floor(Math.random()*255);
  const color3 = Math.floor(Math.random()*255);

  //creer une variable pour la couleur du body
  const colorBody = `RGB(${color1}, ${color2}, ${color3})`;

  //determiner que la couleur du body est colorBody
  document.body.style.background = colorBody;

  //affichons la couleur du body en direct
  document.body.innerHTML = `<h1>RGB : ${colorBody}</h1>`
};

setInterval(colorChange,2000);
