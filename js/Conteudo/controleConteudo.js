function imprimeTodosConteudos(conteudosVetor){
  //conteudo é um array com varios conteudos:
  //secaoConteudos.innerHTML = "";
  console.log(conteudosVetor);
  //console.log(conteudosVetor.length);
  let string = "";

        string += "<div class=\"topico\">";
        string += "<h3 class=\"tituloTopico\">";
        string += "<h3 class=\"tituloTopico\">";
        /*string += "<span class=\"tipoConteudo\">" +
                   conteudosVetor.tipoConteudo + "</span>:";*/
        string += "<span class=\"nomeConteudo\">" +
                   conteudosVetor.nomeConteudo + "</span></h3>";
        string += "<div class=\"conteudoTopico\">";
        string += "<p class=\"resumoConteudo\">" +
                  conteudosVetor.resumoConteudo + "</p>";
        string += "<p class=\"fonteConteudo\">" +
                  conteudosVetor.fonteConteudo + "</p>";
        string += "<button type=\"button\" name=\"visualizarConteudo\"" +
                  "class=\"visualizarConteudo\" value=\"" +
                  conteudosVetor.codConteudo + "\">Visualizar</button>";
        string += "</div>";
        string += "</div>";

        secaoConteudos.innerHTML += string;
        string = "";
        conteudoUnicoVisualiza();
  }

function conteudoUnicoVisualiza(){
  let selecionaConteudo = document.querySelectorAll(".visualizarConteudo");
  console.log(selecionaConteudo);

  for (var i = 0; i < selecionaConteudo.length; i++) {
    selecionaConteudo[i].addEventListener("click", function(){
          let elemento = event.target,
          codigo = elemento.value;

      buscarConteudoCodigo(codigo, function(conteudo){
        console.log(conteudo);
        imprimeConteudo(conteudo);
      });
  })
}
}

function limpaConteudoVisivel(){
  document.querySelector(".topicosCuriosidades").innerHTML = "";
}

function imprimeConteudo(conteudo){
    tituloTopicoVisivel.innerHTML = conteudo.nomeConteudo;
    conteudoTopicoVisivel.innerHTML = conteudo.textoConteudo;
    fonteTopicoVisivel.innerHTML = conteudo.fonteConteudo;
    dataPublicacaoVisivel.innerHTML = conteudo.dataPublicacao;
    mostraConteudo();
  }

function mostraConteudo(){

    conteudoVisivel.style.display = "grid";
    secaoConteudos.style.display = "none";

  }

function retornarExibicao(){

    conteudoVisivel.style.display = "none";
    secaoConteudos.style.display = "grid";
  }

function defineExibicaoConteudo(elemento){
  console.log(elemento);
  let titulo = document.querySelector(".tituloTipoConteudo");
  switch (elemento) {
    case "todos":
      titulo.innerHTML = "Conteudos";
      break;
      /*
    case "publicacao":
      titulo.innerHTML = "Publicações";
      break;
    case "curiosidade":
      titulo.innerHTML = "Curiosidades";
      break;
    case "materia":
      titulo.innerHTML = "Materias";
      break;*/
    case "0":
      titulo.innerHTML = "Som & Ondas";
      break;
    case "1":
      titulo.innerHTML = "Termodinamica";
      break;
    case "2":
      titulo.innerHTML = "Trabalho, Energia & Potência";
      break;
    case "3":
      titulo.innerHTML = "Calor & Termodinâmica";
      break;
    case "4":
      titulo.innerHTML = "Mecânica Quântica";
      break;
    case "5":
      titulo.innerHTML = "Luz & Radiação";
      break;
    case "6":
      titulo.innerHTML = "Electricidade, Magnetismo & Circuitos";
      break;
    default:
  }
}

 // let botao = document.querySelector("#teste");
 //  botao.addEventListener("click", chamadaInicial);

chamadaInicial()

function chamadaInicial() {
  limpaConteudoVisivel();
  buscarTodosConteudos(function(conteudo){
    imprimeTodosConteudos(conteudo);
  })

}





  let secaoConteudos = document.querySelector(".topicosCuriosidades"),
      conteudoVisivel = document.querySelector(".conteudoVisivel"),
      tituloTopicoVisivel = document.querySelector("#tituloTopicoVisivel"),
      conteudoTopicoVisivel = document.querySelector("#conteudoTopicoVisivel"),
      fonteTopicoVisivel = document.querySelector("#fonteTopicoVisivel"),
      dataPublicacaoVisivel = document.querySelector("#dataPublicacaoVisivel"),
      botaoVoltarExibir = document.querySelector("#voltarExibirConteudo"),
      botaoPesquisar = document.getElementsByName("pesquisarTopico"),
      botaoMeusConteudos = document.getElementsByName("meusConteudos"),
      tags = document.querySelectorAll(".tag"),
      filtro = document.getElementsByName("tipoConteudo");


      botaoVoltarExibir.addEventListener("click", retornarExibicao);

      botaoPesquisar[0].addEventListener("click", function(){
        let nome = document.getElementsByName("pesquisar")[0].value;
        limpaConteudoVisivel();
        buscarConteudoNome(nome, function(conteudo){
          console.log(conteudo);
          imprimeTodosConteudos(conteudo);
        })
      })

      botaoMeusConteudos[0].addEventListener("click", function(){
        /*pega o username de quem está logado*/
        // let username = ????????
        // console.log(username);
        buscarConteudoUsername(username, function(conteudo){
          console.log(conteudo);
          imprimeTodosConteudos(conteudo);
        })
      })

      for (var i = 0; i < filtro.length; i++) {
        filtro[i].addEventListener("click", function(){
          let elemento = event.target.value;
          if (elemento == "todos") {
            chamadaInicial();
            defineExibicaoConteudo(elemento);
          }
          else {
            buscarConteudoTipo(elemento, function(conteudo){
              console.log(conteudo);
              imprimeTodosConteudos(conteudo);
            })
            defineExibicaoConteudo(elemento);
          }
        })

      }

      for (var i = 0; i < tags.length; i++) {
        tags[i].addEventListener("click", function(){
          let elemento = event.target;
          elemento = elemento.getAttribute("value");
          limpaConteudoVisivel();
          buscarConteudoMateria(elemento, function(conteudo){
            console.log(conteudo);
            imprimeTodosConteudos(conteudo);
          })
          defineExibicaoConteudo(elemento);
        })
      }
