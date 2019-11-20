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
class Circle{

        constructor(vetor){
              this.codId      = vetor.codMateria;
              this.nameCircle = vetor.nomeMateria;
              this.codImg = vetor.codImg;
              switch (vetor.codMateria) {
                case 0:
                this.cx  =  screen.height/2.05;
                this.cy  =  screen.width/5.4;
                this.filter = "url(#movimentoIcon)";
                break;
                case 1:
                this.cx  =  screen.height/1.8;
                this.cy  =  screen.width/5.4;
                this.filter = "url(#ondaIcon)";
                break;
                case 2:
                this.cx  =  screen.height/1.62;
                this.cy  =  screen.width/5.4;
                this.filter = "url(#trabalhoIcon)";
                break;
                case 3:
                this.cx  =  screen.height/1.48;
                this.cy  =  screen.width/5.4;
                this.filter = "url(#calorIcon)";
                break;
                case 4:
                this.cx  =  screen.height/1.37;
                this.cy  =  screen.width/5.4;
                this.filter = "url(#quanticaIcon)";
                break;
                case 5:
                this.cx  =  screen.height/1.28;
                this.cy  =  screen.width/5.4;
                this.filter = "url(#radiacaoIcon)";
                break;
                case 6:
                this.cx  =  screen.height/1.20;
                this.cy  =  screen.width/5.4;
                this.filter = "url(#eletromagIcon)";
                break;
                default:
              }
              this.r = 25;
              this.stroke   = "black";
              this.strokeWidth   = "1";
          }
}
