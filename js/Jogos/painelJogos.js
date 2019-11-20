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

let telaPainelJogo = document.querySelectorAll(".telaPainelJogo")[0];
let divPainelJogo = document.querySelector("#divPainelJogo");
let divPainelJogo2 = document.querySelector("#divPainelJogo2");
let tituloMateria = document.querySelector("#tituloMateria");
let fecharModalPainel = document.querySelector("#fecharModalPainel");
let iframeJogoModal = document.querySelector("#iframeJogoModal");
let iframeJogo = document.querySelector("#iframeJogo");
let fecharModalJogo = document.querySelector("#fecharModalJogo");
let creditosJogoButton = document.querySelector("#creditosJogoButton");
let idMascara = document.querySelector("#idMascara");
let modal = document.querySelectorAll(".modal");
let posDivModal = document.querySelectorAll(".posDivModal");



fecharModalPainel.addEventListener('click', sumirDivModal);

function sumirDivModal() {
  divPainelJogo.style.top = "-50%";
  divPainelJogo.style.opacity = "0";
  divPainelJogo2.style.opacity = "0";
  setTimeout(function () {
    divPainelJogo2.innerHTML = '';
  }, 500);
}
fecharModalJogo.addEventListener('click', sumirDivModalJogo);

function sumirDivModalJogo() {
  idMascara.classList.toggle("ocultar");
  iframeJogoModal.style.opacity = "0";
  iframeJogo.style.opacity = "0";
  setTimeout(function () {
    iframeJogo.innerHTML = '';
  }, 500);
}

function abrirJogos(tipo) {
  divPainelJogo.style.top = "-50%";
  divPainelJogo.style.opacity = "0";
  divPainelJogo2.style.opacity = "0";
  iframeJogoModal.style.opacity = "0";
  iframeJogo.style.opacity = "0";
    divPainelJogo2.innerHTML = '';
        iframeJogo.innerHTML = '';
  let x = 0;
  switch (tipo){
      case "Leis de Newton":
      x = 0;
      break;
      case "Som e Ondas":
      x = 1;
      break;
      case "Energia e Potência":
      x = 2;
      break;
      case "Termodinâmica":
      x = 3;
      break;
      case "Mecânica Quântica":
      x = 4;
      break;
      case "Luz e Radiação":
      x = 5;
      break;
      case "Eletromagnetismo":
      x = 6;
      break;
  }
buscarTodosJogosMateria(x, function(jogos) {
      tituloMateria.innerHTML = tipo;
       buscarImgsJogos(jogos.codImgJogo, function(imagem) {
         divPainelJogo.style.opacity = "1";
         divPainelJogo2.style.opacity = "1";
         let divsJogos = document.createElement("div");
         let img = document.createElement("img");
         let id = Math.floor(Math.random() * 100) * x + 1;
         img.setAttribute("id", "img" + id);
         let link = jogos.urlJogo;
         let texto = document.createElement("label")
         texto.innerHTML = jogos.nomeJogo;
         texto.setAttribute("for", "img" + id);
         img.addEventListener('click', function () {
           let texto = document.createElement("h1");
           texto.innerHTML = jogos.nomeJogo;
           texto.style.textAlign = "center";
           texto.style.fontFamily = "'Bree Serif', serif";
           texto.style.fontFamily = "'Bree Serif', serif";
           sumirDivModal();
           iframeJogoModal.style.opacity = "1";
           iframeJogo.style.opacity = "1";
           iframeJogoModal.style.display = "block";
           let divJogoFinal = document.createElement("div");
           divJogoFinal.style.marginLeft = "50px";
           divJogoFinal.style.marginBottom = "20px";
           divJogoFinal.innerHTML = link;
           iframeJogo.appendChild(texto);
           iframeJogo.appendChild(divJogoFinal);
           idMascara.classList.toggle("ocultar");
           creditosJogoButton.addEventListener('click', function () {
             alert("CREDITOS DA SIMULAÇÃO:" + jogos.creditosJogo);
           });
         });
         img.setAttribute("src", imagem.caminhoImagem);
         divsJogos.style.display = "inline-block";
         divsJogos.style.margin = "10px 10px 10px 10px";
         texto.style.display = "block";
         texto.style.fontFamily = "'Bree Serif', serif";
         divsJogos.appendChild(texto);
         divsJogos.appendChild(img);
         divPainelJogo2.appendChild(divsJogos);
         divPainelJogo.style.top = "10%";

       });
  });
}


function buscarImgsJogos(id, fn){
  let conexao = Request.get("req=buscarById&tipo=" + id, "ImagemServlet");
  conexao.then(function(imagem){
    fn(JSON.parse(imagem));
  });
}


function buscarTodosJogosMateria(tipo, fn){
  let conexao = Request.get("req=buscarByMateria&tipo=" + tipo, "JogoServlet");
  conexao.then(function(resultado){
  for (var i = 0; i < JSON.parse(resultado).length; i++) {
     fn(new Jogo(JSON.parse(resultado)[i]));
  }
  });
}
