function imprimeTodosConteudos(conteudosVetor){
  //conteudo é um array com varios conteudos:
  secaoConteudos.innerHTML = "";
  console.log(conteudosVetor);
  let string = "";

      for(i = 0; i < conteudosVetor.length; i++){
        string += "<div class=\"topico\">";
        string += "<h3 class=\"tituloTopico\">";
        string += "<h3 class=\"tituloTopico\">";
        string += "<span class=\"tipoConteudo\">" +
                   conteudosVetor[i].tipoConteudo + "</span>:";
        string += "<span class=\"nomeConteudo\">" +
                   conteudosVetor[i].nomeConteudo + "</span></h3>";
        string += "<div class=\"conteudoTopico\">";
        string += "<p class=\"resumoConteudo\">" +
                  conteudosVetor[i].resumoConteudo + "</p>";
        string += "<p class=\"fonteConteudo\">" +
                  conteudosVetor[i].fonteConteudo + "</p>";
        string += "<button type=\"button\" name=\"visualizarConteudo\"" +
                  "class=\"visualizarConteudo\" value=\"" +
                  conteudosVetor[i].codConteudo + "\">";
        string += "</div>";
        string += "</div>";

        secaoConteudos.innerHTML += string;
        string = "";
    };
    let selecionaConteudo = document.querySelectorAll(".visualizarConteudo");

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
    case "publicacao":
      titulo.innerHTML = "Publicações";
      break;
    case "curiosidade":
      titulo.innerHTML = "Curiosidades";
      break;
    case "materia":
      titulo.innerHTML = "Materias";
      break;
    case "Relatividade":
      titulo.innerHTML = "Relatividade";
      break;
    case "Termodinamica":
      titulo.innerHTML = "Termodinamica";
      break;
    case "MRU":
      titulo.innerHTML = "Movimento Retilineo Uniforme";
      break;
    case "MRUV":
      titulo.innerHTML = "Movimento RU Variado";
      break;
    default:
  }
}

  let botao = document.querySelector("#teste");
  botao.addEventListener("click", chamadaInicial);

chamadaInicial()

function chamadaInicial() {
  buscarTodosConteudos(function(conteudo){
    console.log(conteudo);
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
        console.log(nome);
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
          console.log(elemento);
          buscarConteudoTipo(elemento, function(conteudo){
            console.log(conteudo);
            imprimeTodosConteudos(conteudo);
          })
          defineExibicaoConteudo(elemento);
        })
      }

      for (var i = 0; i < tags.length; i++) {
        tags[i].addEventListener("click", function(){
          let elemento = event.target.innerHTML;
          console.log(elemento);
          buscarConteudoMateria(elemento, function(conteudo){
            console.log(conteudo);
            imprimeTodosConteudos(conteudo);
          })
          defineExibicaoConteudo(elemento);
        })
      }

      //va tirar isso aqui
      let selecionaConteudo = document.querySelectorAll(".visualizarConteudo");

      for (var i = 0; i < selecionaConteudo.length; i++) {
        selecionaConteudo[i].addEventListener("click", function(){
          let elemento = event.target,
              codigo = elemento.value;

              console.log(codigo);

          /*tenho que ir testando os nodos pra pegar o codigo*/
          buscarConteudoCodigo(codigo, function(conteudo){
            console.log(conteudo);
            imprimeConteudo(conteudo);
          });
        });
      }
      //ate aqui
