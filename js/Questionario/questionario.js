/*
* Classe objeto para a encapsulação de dados do Patrimonio.
 * @author Italo Fideles
*/

class Questionario{

      constructor(content){
        this._codQuestionario = content.codQuestionario;
        this._materia = content.materia;

      }

      printToConsole(){
        console.log("CodQuestionario: " + this._codQuestionario);
        console.log("Materia: " + this._materia);
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
     * Converte objeto Questionario em string JSON.
     * @returns {string} String com formatação JSON do objeto.
     * @author Italo Fideles
     */

    toJSON()
    {
      let questionarioJSON = {
        "codQuestionario": this._codQuestionario,
        "materia": this._materia,
      }
      return JSON.stringify(questionarioJSON);
    }

    /**
   * Coloca valores nas váriaveis de questionario a partir de um JSON
   * @param {string} questionarioString com formatação JSON do objeto.
   * @author Italo Fideles
   */
    fromJSON(patrimonioJSON){
      this._codQuestionario = questionarioJSON.codQuestionario;
      this._materia = questionarioJSON.materia;
    }

    // getter
      get codQuestionario() {
          return this._codQuestionario;
      }
      get materia() {
          return this.materia;
      }

    //setter

    set codQuestionario(codQuestionario) {
        this._codQuestionario = this.tryParse(codQuestionario);
    }
    set  materia(materia){
      this._materia = materia;
    }

}
