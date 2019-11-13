/*
*
 * @author Arthur
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

      /**
     * Tenta converter uma string para o seu valor em Float e a retorna.
     * @param {string} number String a ser convertida.
     * @returns {number} Valor em Float correspondente ou o valor inicial.
     * @author Italo Fideles
     */
    tryParse(number){

        if (isNaN(number) == true && typeof number === "string")
            return parseFloat(number);
        else
            return number;
    }

    /**
     * Converte objeto Conteudo em string JSON.
     * @returns {string} String com formatação JSON do objeto.
     * @author Italo Fideles
     */

    toJSON()
    {
      let conteudoJSON = {
        "codJogo" : this.codJogo,
        "nomeJogo" : this.nomeJogo,
        "urlJogo" : this.urlJogo,
        "creditosJogo" : this.creditosJogo,
        "codImgJogo" : this.codImgJogo,
        "codMatJogo" : this.codMatJogo
      }
      return JSON.stringify(conteudoJSON);
    }

    /**
   * Coloca valores nas váriaveis de conteudo a partir de um JSON
   * @param {string} questionarioString com formatação JSON do objeto.
   * @author Italo Fideles
   */
    fromJSON(conteudoJSON){
      this.codJogo  = conteudoJSON.codJogo;
      this.nomeJogo = conteudoJSON.nomeJogo;
      this.urlJogo = conteudoJSON.urlJogo;
      this.creditosJogo = conteudoJSON.creditosJogo;
      this.codImgJogo = conteudoJSON.codImgJogo;
      this.codMatJogo  = conteudoJSON.codMatJogo;
    }
}
