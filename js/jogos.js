
window.onload = function(e){
  function addOrbita(planeta, solCSS) {
  let distancia = distanciaCentro(planeta, solCSS);
  //console.log(distancia);
    if (solCSS === 0) {
      planeta.style.cx = solCSS + "px";
      planeta.style.cy = solCSS + "px";
    }
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
        planeta.style.cx = Math.cos(cont) * distancia  + parseInt(solCSS.cx) + "px";
        planeta.style.cy = Math.sin(cont) * distancia + parseInt(solCSS.cy) + "px";
       window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
  }


  function distanciaCentro(corpo, centro) {
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
  var orbita = document.querySelectorAll(".orbita");
  var sol = document.querySelector("#sol");
  sol.style.position = "absolute";
  sol.style.zIndex = "1";

  var planetasCSS = [];
  for (var i = 0; i < planetas.length; i++) {
    planetasCSS[i] = (window.getComputedStyle(planetas[i]));
    planetas[i].style.cursor = "pointer";
    orbita[i].style.cursor = "pointer";
    orbita[i].addEventListener('mouseover', function(e) {
      console.log(e.path[0].style.stroke);
      if (e.path[0].style.stroke == "rgb(0, 147, 255)") {
        e.path[0].style.stroke = "rgba(0, 147, 255, 0.1)";
      }else if (e.path[0].style.stroke == "rgba(0, 147, 255, 0.1)" || e.path[0].style.stroke == "" ){
        e.path[0].style.stroke = "rgba(0, 147, 255, 1)";
      }
    });
    orbita[i].addEventListener('mouseout', function(e) {
      console.log(e.path[0].style.stroke);
      if (e.path[0].style.stroke == "rgb(0, 147, 255)") {
        e.path[0].style.stroke = "rgba(0, 147, 255, 0.1)";
      }else if (e.path[0].style.stroke == "rgba(0, 147, 255, 0.1)" || e.path[0].style.stroke == "" ){
        e.path[0].style.stroke = "rgba(0, 147, 255, 1)";
      }
    });
  }






//var satelitesCSS = document.querySelectorAll(satelites); --IMPORTANTE
  var solCSS = window.getComputedStyle(sol);


  for (var i = 0; i < planetas.length; i++) {
    addOrbita(planetas[i], solCSS);
  }

  for (var i = 0; i < satelites.length; i++) {
    addOrbita(satelites[i], planetasCSS[i]);
  }

  sol.style.cursor = "pointer";
  sol.addEventListener('click', buscarJogo);


  function buscarJogo(){
    let res = Request.get('req=buscarJogo')
    window.setTimeout(
      function() {
        res.then(function(valor){
          let frame = document.createElement("DIV");
          frame.innerHTML = valor;
          frame.style.position = "absolute";
          frame.style.zIndex = "5";
          document.body.appendChild(frame);
          console.log(frame);
        });
        console.log(res);
      }, Math.random() * 2000 + 1000);
  }






}
