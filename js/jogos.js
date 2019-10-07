
window.onload = function(e){
  function animationOrbit(corpo, centro, distancia) {
    console.log(distancia);
    var start = null;
    var cont = 0;
    function step(timestamp) {
      if (cont >= 100) {
        cont = 0;
      }else if (cont < 100) {
        if (distancia < 25) {
          cont += 0.1;
        }else if(distancia > 25 && distancia < 30){
          cont += 0.09
        }else if(distancia > 30 && distancia < 36){
          cont += 0.05
        }else if(distancia > 36 && distancia < 77){
          cont += 0.03
        }else if (distancia > 77 && distancia < 114){
          cont += 0.01;
        }else if (distancia > 114 && distancia < 163){
          cont += 0.008;
        }else if (distancia > 163 && distancia < 234){
          cont += 0.0051;
        }else if (distancia > 234 && distancia < 333){
          cont += 0.00185;
        }else if (distancia > 333 && distancia < 425){
          cont += 0.0008;
        }else if (distancia > 425 && distancia < 510){
          cont += 0.00045;
        }else {
          cont += 0.0001;
        }
      }
      if (!start) start = timestamp;
      var progress = timestamp - start;
        corpo.style.cx = Math.cos(cont) * distancia  + parseInt(centro.cx) + "px";
        corpo.style.cy = Math.sin(cont) * distancia + parseInt(centro.cy) + "px";
       window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
  }


  function cDistance(corpo, centro) {
    let distancex, distancey;
    let x = window.getComputedStyle(corpo).cx;
    let centrox = parseInt(centro.cx);
    let y = window.getComputedStyle(corpo).cy;
    let centroy = parseInt(centro.cy);
    x = parseInt(x.match(/\d+/g));
    y = parseInt(y.match(/\d+/g));
    distancia = Math.sqrt( Math.pow(x - centrox, 2) + Math.pow(y - centroy, 2));
    return distancia;

  }

  var planetas = document.querySelectorAll(".planeta");
  var satelites = document.querySelectorAll(".satelite");
  var sol = document.querySelectorAll(".sol");
  var estilo = window.getComputedStyle(sol[0]);
  var estilo1 = window.getComputedStyle(planetas[0]);
  var estilo2 = window.getComputedStyle(planetas[1]);
  var estilo3 = window.getComputedStyle(planetas[2]);
  var estilo4 = window.getComputedStyle(planetas[3]);
  var estilo5 = window.getComputedStyle(planetas[4]);
  var estilo6 = window.getComputedStyle(planetas[5]);
  var estilo7 = window.getComputedStyle(planetas[6]);
  animationOrbit(planetas[0], estilo, cDistance(planetas[0], estilo));
  animationOrbit(planetas[1], estilo, cDistance(planetas[1], estilo));
  animationOrbit(planetas[2], estilo, cDistance(planetas[2], estilo));
  animationOrbit(planetas[3], estilo, cDistance(planetas[3], estilo));
  animationOrbit(planetas[4], estilo, cDistance(planetas[4], estilo));
  animationOrbit(planetas[5], estilo, cDistance(planetas[5], estilo));
  animationOrbit(planetas[6], estilo, cDistance(planetas[6], estilo));

  animationOrbit(satelites[0], estilo1, cDistance(satelites[0], estilo1));
  animationOrbit(satelites[1], estilo2, cDistance(satelites[1], estilo2));
  animationOrbit(satelites[2], estilo3, cDistance(satelites[2], estilo3));
  animationOrbit(satelites[3], estilo4, cDistance(satelites[3], estilo4));
  animationOrbit(satelites[4], estilo5, cDistance(satelites[4], estilo5));
  animationOrbit(satelites[5], estilo6, cDistance(satelites[5], estilo6));
  animationOrbit(satelites[6], estilo7, cDistance(satelites[6], estilo7));

}
