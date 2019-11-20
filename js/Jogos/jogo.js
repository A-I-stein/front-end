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
class Jogo{

        constructor(jogosVetor){
              this.codJogo      = jogosVetor.codJogo;
              this.nomeJogo     = jogosVetor.nomeJogo;
              this.urlJogo      = jogosVetor.urlJogo;
              this.creditosJogo = jogosVetor.creditosJogo;
              this.codImgJogo   = jogosVetor.codImgJogo;
              this.codMatJogo   = jogosVetor.codMatJogo;
          }

      printToConsole(){
        console.log("codJogo: " + this.codJogo);
        console.log("nomeJogo: " + this.nomeJogo);
        console.log("urlJogo: " + this.urlJogo);
        console.log("creditosJogo: " + this.creditosJogo);
        console.log("codImgJogo: " + this.codImgJogo);
        console.log("codMatJogo: " + this.codMatJogo);
      }
}
