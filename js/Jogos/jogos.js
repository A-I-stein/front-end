/*
* Projeto de Integração - A.I.Stein
* CEFET-MG
* INF-3A 2019
* Arthut Marcolino, Gabriel Cruz, Heitor Santos, Italo Nascimento
*/



/*
*
* @author Arthur Marcolino
*
*/
window.onload = function(e){

  function addOrbita(planeta,  titulo, solCSSData) {
    let distancia = distanciaCentro(planeta, solCSSData);
    if (solCSSData === 0) {
      planeta.style.cx = solCSSData + "px";
      planeta.style.cy = solCSSData + "px";
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
        }else if (distancia > 163 && distancia < 244){
          cont += 0.0051;
        }else if (distancia > 244 && distancia < 333){
          cont += 0.00185;
        }else if (distancia > 333 && distancia < 370){
          cont += 0.0008;
        }else if (distancia > 370 && distancia < 450){
          cont += 0.00045;
        }else {
          cont += 0.00019;
        }
      }
      if (!start) start = timestamp;
      var progress = timestamp - start;
      planeta.style.cx = Math.cos(cont) * distancia  + parseInt(solCSSData.cx) + "px";
      planeta.style.cy = Math.sin(cont) * distancia  + parseInt(solCSSData.cy) + "px";

      let x = getComputedStyle(titulo).length;

      let auxX = Math.cos(cont) * distancia - 50  + parseInt(solCSSData.cx) + "px";
      let auxY = Math.sin(cont) * distancia + 40  + parseInt(solCSSData.cy) + "px";

      titulo.setAttribute("x", auxX);
      titulo.setAttribute("y", auxY);

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


  function buscarMateriaTodas(fn){
    let conexao = Request.get("req=buscarTodos", "MateriaServlet");
    conexao.then(function(resultado){
      for (var i = 0; i < JSON.parse(resultado).length; i++) {
        fn(new Materia(JSON.parse(resultado)[i]));
      }
    });
  }

  let svgPag = document.querySelector("#svgId");

  buscarMateriaTodas(function(materias) {
    let circles = [];
    circles.push(new Circle(materias));
    desenharCircles(circles, svgPag);
  });

  function desenharCircles(vetor, svg) {
    var materiaPlaneta;
    var orbita;
    var texto;
    let auxX;
    let auxY;
    for (var i = 0; i < vetor.length; i++) {
      orbita = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      orbita.setAttribute("cx", 426.67);
      orbita.setAttribute("cy", 360);
      let distanciaAoCentro =   Math.sqrt( Math.pow(vetor[i].cx - 426.67, 2) + Math.pow(vetor[i].cy - 360, 2));
      orbita.setAttribute("r", distanciaAoCentro);
      orbita.setAttribute("stroke", "rgba(0, 147, 255, 0.1)");
      orbita.setAttribute("stroke-width", "10");
      orbita.setAttribute("class", "orbita");
      orbita.setAttribute("id", vetor[i].nameCircle);
      orbita.setAttribute("fill", "none");

      svg.appendChild(orbita);

      materiaPlaneta = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      materiaPlaneta.setAttribute("cx",vetor[i].cx);
      materiaPlaneta.setAttribute("cy",vetor[i].cy);
      materiaPlaneta.setAttribute("r",vetor[i].r);
      materiaPlaneta.setAttribute("stroke",vetor[i].stroke);
      materiaPlaneta.setAttribute("stroke-width",vetor[i].strokeWidth);
      materiaPlaneta.setAttribute("id", "planeta");
      materiaPlaneta.setAttribute("filter", vetor[i].filter);

      text.setAttribute("stroke", "white");
      text.setAttribute("stroke-width", 0.2);
      text.setAttribute("id", "materiaNome");
      text.setAttribute("zIndex", "-1");
      text.innerHTML = vetor[i].nameCircle;
      svg.appendChild(text);
      svg.appendChild(materiaPlaneta);

    }
    materiaPlaneta = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    materiaPlaneta.setAttribute("cx", screen.width/4.5);
    materiaPlaneta.setAttribute("cy", screen.height/3);
    materiaPlaneta.setAttribute("filter", "url(#fisicaIcon)");
    materiaPlaneta.setAttribute("r", 50);
    materiaPlaneta.setAttribute("stroke", "black");
    materiaPlaneta.setAttribute("stroke-width", "3");
    materiaPlaneta.setAttribute("id", "sol");
    svg.appendChild(materiaPlaneta);
  }


  setTimeout(function () {
    var planetas = document.querySelectorAll("#planeta");
    var textos = document.querySelectorAll("#materiaNome");
    var orbita = document.querySelectorAll(".orbita");
    var sol = document.querySelector("#sol");
    var solCSSData = window.getComputedStyle(sol);

    var planetasCSS = [];
    for (var i = 0; i < planetas.length; i++) {
      planetasCSS[i] = (window.getComputedStyle(planetas[i]));
      planetas[i].style.cursor = "pointer";
      orbita[i].style.cursor = "pointer";

      orbita[i].addEventListener('mouseover', addOrbitaLight);
      orbita[i].addEventListener('mouseout', removeOrbitaLight);
      orbita[i].addEventListener('click', function (e) {
        abrirJogos(e.path[0].id);
      });
      planetas[i].addEventListener('click', function(e){
        abrirJogos(e.path[0].previousSibling.innerHTML);
      });
    }

    for (var i = 0; i < planetas.length; i++) {
      addOrbita(planetas[i], textos[i], solCSSData);
    }
  }, 100);


  function addOrbitaLight(e) {
    if (typeof e === "object") {
      if (e.path[0].style.stroke == "rgb(0, 147, 255)") {
        e.path[0].style.stroke = "rgba(0, 147, 255, 0.1)";
      }else if (e.path[0].style.stroke == "rgba(0, 147, 255, 0.1)" || e.path[0].style.stroke == "" ){
        e.path[0].style.stroke = "rgba(0, 147, 255, 1)";
      }
    }else{
      if (e.style.stroke == "rgb(0, 147, 255)") {
        e.path[0].style.stroke = "rgba(0, 147, 255, 0.1)";
      }else if (e.path[0].style.stroke == "rgba(0, 147, 255, 0.1)" || e.path[0].style.stroke == "" ){
        e.path[0].style.stroke = "rgba(0, 147, 255, 1)";
      }
    }

  }

  function removeOrbitaLight(e) {
    if (e.path[0].style.stroke == "rgb(0, 147, 255)") {
      e.path[0].style.stroke = "rgba(0, 147, 255, 0.1)";
    }else if (e.path[0].style.stroke == "rgba(0, 147, 255, 0.1)" || e.path[0].style.stroke == "" ){
      e.path[0].style.stroke = "rgba(0, 147, 255, 1)";
    }
  }
}
