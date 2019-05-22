/*  Variaveis */

var rotativoImagem = document.querySelectorAll(".imagemRotativo");
var rotativoBotao = document.querySelectorAll(".rotativoBotao");


//-------------------------------------------------------------------------//

/*    Chamada das funções     */

for (var i = 0; i < rotativoBotao.length; i++) {
  rotativoBotao[i].addEventListener("click", function(){
    controleSlideInicial(event.currentTarget);
  });
}

//---------------------------------------------------------------------------//


/*    Funções     */



function controleSlideInicial(n) {
  console.log(n);
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
}



//---------------------------------------------------------------------//
