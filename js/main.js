/*  Variaveis */

let rotativoImagem = document.querySelectorAll(".imagemRotativo"),
    rotativoBotao = document.querySelectorAll(".rotativoBotao");
    intervalo = setInterval(timerSlideInicial, 9000);

function timerSlideInicial(){

}
//-------------------------------------------------------------------------//

/*    Chamada das funções     */

for (var i = 0; i < rotativoBotao.length; i++) {
  rotativoBotao[i].addEventListener("click", function(){
    controleSlideInicial(event.currentTarget);
  });
}

//---------------------------------------------------------------------------//


/*    Funções     */

//Troca os slides automaticamente
function timerSlideInicial(){
  let rotativoImagem = document.querySelectorAll(".imagemRotativo"),
      rotativoBotao = document.querySelectorAll(".rotativoBotao"),
      status = [],
      regex = /imagemRotativo ativo/i;

  // Aplicar ao vetor o nome completo das classes de cada elemento do vetor
  // rotativoImagem
  for (var i = 0; i < rotativoImagem.length; i++) {
    status.push(rotativoImagem[i].className);
  }

  //Aplica a troca de slides
  for (var i = 0; i < rotativoImagem.length; i++) {
    //testa se o slide esta ativo e se não é o ultimo slide
    if (regex.test(status[i]) == true && i != rotativoImagem.length-1) {
      rotativoImagem[i+1].classList.add("ativo");
      rotativoBotao[i+1].classList.add("ativo");

      rotativoImagem[i].classList.remove("ativo");
      rotativoBotao[i].classList.remove("ativo");
    }
    //testa se o slide esta ativo e se é o ultimo slide
    else if (regex.test(status[i]) == true && i == rotativoImagem.length-1) {
      rotativoImagem[0].classList.add("ativo");
      rotativoBotao[0].classList.add("ativo");

      rotativoImagem[i].classList.remove("ativo");
      rotativoBotao[i].classList.remove("ativo");
    }
  }
}


function controleSlideInicial(n) {
  clearInterval(intervalo);
  for (var i = 0; i < rotativoBotao.length; i++) {
    if (rotativoBotao[i] == n) {
      rotativoImagem[i].classList.add("ativo");
      rotativoBotao[i].classList.add("ativo");
    }
    else{
      rotativoImagem[i].classList.remove("ativo");
      rotativoBotao[i].classList.remove("ativo");
    }
  }
  intervalo = setInterval(timerSlideInicial, 9000);
}



//---------------------------------------------------------------------//
