var planetas = document.querySelectorAll(".planeta");
var sol = document.querySelectorAll(".sol");

var start = null;
var cont = 0;
function step(timestamp) {
  if (cont >= 100) {
    cont = 0;
  }else if (cont < 100) {
    cont += 0.001;
  }
  if (!start) start = timestamp;
  var progress = timestamp - start;
  for (var i = 0; i < planetas.length; i++) {
    planetas[i].style.left = Math.sin(cont) * 70 * ((i+1)/2) + 220 + "px";
    planetas[i].style.top = - Math.cos(cont) * 70 * ((i+1)/2) + 220 + "px";
  }
    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);
