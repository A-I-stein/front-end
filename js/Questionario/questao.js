/*
* Classe objeto para a encapsulação de dados do Conteudo
 * @author Italo Fideles
*/

class Questao{

      constructor(content){
        this.codQuestionario =    content.codQuestionario;
        this.codQuestao =         content.codQuestao;
        this.descPergunta =       content.descPergunta;
        this.descRespCorreta =    content.descRespCorreta;
        this.descRespIncorreta1 = content.descRespIncorreta1;
        this.descRespIncorreta2 = content.descRespIncorreta2;
        this.descRespIncorreta3 = content.descRespIncorreta3;
        }



      printToConsole(){
        console.log("codQuestionario: " + this.codQuestionario);
        console.log("codQuestao: " + this.codQuestao);
        console.log("descPergunta: " + this.descPergunta);
        console.log("descRespCorreta: " + this.descRespCorreta);
        console.log("descRespIncorreta1: " + this.descRespIncorreta1);
        console.log("descRespIncorreta2: " + this.descRespIncorreta2);
        console.log("descRespIncorreta3: " +  this.descRespIncorreta3);

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
      let questaoJSON = {
        "codQuestionario " : this.codQuestionario,
        "codQuestao " : this.codQuestao,
        "descPergunta " : this.descPergunta,
        "descRespCorreta " : this.descRespCorreta,
        "descRespIncorreta1 " : this.descRespIncorreta1,
        "descRespIncorreta2 " : this.descRespIncorreta2,
        "descRespIncorreta3 " :  this.descRespIncorreta3,
      }
      return JSON.stringify(questaoJSON);
    }

    /**
   * Coloca valores nas váriaveis de conteudo a partir de um JSON
   * @param {string} questionarioString com formatação JSON do objeto.
   * @author Italo Fideles
   */
    fromJSON(questaoJSON){
      this.codQuestionario =    questaoJSON.codQuestionario;
      this.codQuestao =         questaoJSON.codQuestao;
      this.descPergunta =       questaoJSON.descPergunta;
      this.descRespCorreta =    questaoJSON.descRespCorreta;
      this.descRespIncorreta1 = questaoJSON.descRespIncorreta1;
      this.descRespIncorreta2 = questaoJSON.descRespIncorreta2;
      this.descRespIncorreta3 = questaoJSON.descRespIncorreta3;
    }
}
