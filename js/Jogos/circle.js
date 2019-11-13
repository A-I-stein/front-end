/*
*
 * @author Arthur
*/

class Circle{

        constructor(vetor){
              this.codId      = vetor.codMateria;
              this.nameCircle = vetor.nomeMateria;
              switch (vetor.codMateria) {
                case 0:
                this.cx  =  590;
                this.cy  =  410;
                this.filter = "url(#movimentoIcon)";
                break;
                case 1:
                this.cx  =  620;
                this.cy  =  440;
                this.filter = "url(#ondaIcon)";
                break;
                case 2:
                this.cx  =  655;
                this.cy  =  475;
                this.filter = "url(#trabalhoIcon)";
                break;
                case 3:
                this.cx  =  705;
                this.cy  =  525;
                this.filter = "url(#calorIcon)";
                break;
                case 4:
                this.cx  =  775;
                this.cy  =  595;
                this.filter = "url(#quanticaIcon)";
                break;
                case 5:
                this.cx  =  840;
                this.cy  =  660;
                this.filter = "url(#radiacaoIcon)";
                break;
                case 6:
                this.cx  =  900;
                this.cy  =  720;
                this.filter = "url(#eletromagIcon)";
                break;
                default:
              }
              this.r = 25;
              this.stroke   = "black";
              this.strokeWidth   = "1";
          }
}
