function imprimeTodosConteudos(conteudoVetor){
  //conteudo é um array com varios conteudos:
  let string = "";

      for(i = 0; i < conteudoVetor.length; i++){
        string += "<div class=\"topico\">";
        string += "<h3 class=\"tituloTopico\">" + conteudosVetor[i].nomeConteudo + "</h3>";
        string += "<div class=\"conteudoTopico\">";
        string += "<input type=\"hidden\" class=\"codConteudo\" value=" +
                  conteudosVetor[i].codConteudo + "\">";
        string += conteudosVetor[i].resumoConteudo;
        string += "</div>";
        string += "</div>";

        secaoConteudos.innerHTML += string;
        string = "";
    };
    let selecionaConteudo = document.querySelectorAll(".topico");

    for (var i = 0; i < selecionaConteudo.length; i++) {
      selecionaConteudo[i].addEventListener("click", function(){
      //  let elemento = event.target;
        /* tenho que ir testando os nodos pra pegar o codigo*/
        //buscarConteudoCodigo(codigo);
        mostraConteudo('teste');
      });
    }
}



function imprimeConteudo(conteudo){
  //conteudo é um objeto conteudo com informações


}

function mostraConteudo(conteudo){

  conteudoVisivel.style.display = "grid";
  secaoConteudos.style.display = "none";
  tituloTopicoVisivel.innerHTML = conteudo.nomeConteudo;
  conteudoTopicoVisivel.innerHTML = conteudo.textoConteudo;
  fonteTopicoVisivel.innerHTML = conteudo.fonteConteudo;
  dataPublicacaoVisivel.innerHTML = conteudo.dataPublicacao;

}

function retornarExibicao(){

  console.log("teste");
  conteudoVisivel.style.display = "none";
  secaoConteudos.style.display = "grid";
}
//buscarTodosConteudos();

let secaoConteudos = document.querySelector(".topicosCuriosidades"),
    conteudoVisivel = document.querySelector(".conteudoVisivel"),
    tituloTopicoVisivel = document.querySelector("#tituloTopicoVisivel"),
    conteudoTopicoVisivel = document.querySelector("#conteudoTopicoVisivel"),
    fonteTopicoVisivel = document.querySelector("#fonteTopicoVisivel"),
    dataPublicacaoVisivel = document.querySelector("#dataPublicacaoVisivel"),
    botaoVoltarExibir = document.querySelector("#voltarExibirConteudo");

    botaoVoltarExibir.addEventListener("click", retornarExibicao);

    let selecionaConteudo = document.querySelectorAll(".topico");

    for (var i = 0; i < selecionaConteudo.length; i++) {
      selecionaConteudo[i].addEventListener("click", function(){
      //  let elemento = event.target;
        /* tenho que ir testando os nodos pra pegar o codigo*/
        //buscarConteudoCodigo(codigo);
        mostraConteudo('teste');
      });
    }
