/*
* Classe objeto para a encapsulação de dados do Patrimonio.
 * @author Italo Fideles
*/

class Questionario{

      constructor(){
            this._codConteudo = codConteudo;
            this._nomeConteudo = nomeConteudo;
            this._textoConteudo = textoConteudo;
            this._statusConteudo = statusConteudo;
            this._username = username;
            this._materia = materia;
            this._dataPublicacao = dataPublicacao;
            this._resumoConteudo = resumoConteudo;
            this._tipoConteudo = tipoConteudo;
            this._fonteConteudo = fonteConteudo;
        }

      }

      printToConsole(){
        console.log("CodConteudo: " + this._codConteudo);
        console.log("NomeConteudo: " + this._nomeConteudo);
        console.log("TextoConteudo: " + this._textoConteudo);
        console.log("StatusConteudo: " + this._statusConteudo);
        console.log("Username: " + this._username);
        console.log("Materia: " + this._materia);
        console.log("DataPublicacao: " +  this._dataPublicacao);
        console.log("ResumoConteudo: " + this._resumoConteudo);
        console.log("TipoConteudo: " + this._tipoConteudo);
        console.log("FonteConteudo: " + this._tipoConteudo);
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
        "codConteudo" : this._codConteudo);
        "nomeConteudo" : this._nomeConteudo);
        "textoConteudo" : this._textoConteudo);
        "statusConteudo" : this._statusConteudo);
        "username" : this._username);
        "materia" : this._materia);
        "dataPublicacao" :  this._dataPublicacao);
        "resumoConteudo" : this._resumoConteudo);
        "tipoConteudo" : this._tipoConteudo);
        "fonteConteudo" : this._tipoConteudo);
      }
      return JSON.stringify(conteudoJSON);
    }

    /**
   * Coloca valores nas váriaveis de conteudo a partir de um JSON
   * @param {string} questionarioString com formatação JSON do objeto.
   * @author Italo Fideles
   */
    fromJSON(conteudoJSON){
      this._codConteudo  = conteudoJSON.codConteudo;
      this._nomeConteudo = conteudoJSON.nomeConteudo;
      this._textoConteudo = conteudoJSON.textoConteudo;
      this._statusConteudo = conteudoJSON.statusConteudo;
      this._username = conteudoJSON.username;
      this._materia  = conteudoJSON.materia;
      this._dataPublicacao = conteudoJSON.dataPublicacao;
      this._resumoConteudo = conteudoJSON.resumoConteudo;
      this._tipoConteudo = conteudoJSON.tipoConteudo;
      this._tipoConteudo = conteudoJSON.tipoConteudo;
    }

    //getter

    get CodConteudo() {
        return this._codConteudo;
    }

    get NomeConteudo() {
        return this._nomeConteudo;
    }

    get TextoConteudo() {
        return this._textoConteudo;
    }

     get StatusConteudo() {
        return this._statusConteudo;
    }

    get Username() {
        return this._username;
    }

    get Materia() {
        return this._materia;
    }

    get DataPublicacao() {
        return this._dataPublicacao;
    }

    get ResumoConteudo() {
        return this._resumoConteudo;
    }

    get TipoConteudo() {
        return this._tipoConteudo;
    }

    get FonteConteudo() {
        return this._fonteConteudo;
    }

    //setter

    set CodConteudo(codConteudo) {
      this._codConteudo = this.tryParse(codConteudo);
    }

    set NomeConteudo(nomeConteudo) {
      this._nomeConteudo = nomeConteudo;
    }

    set TextoConteudo(textoConteudo) {
      this._textoConteudo = textoConteudo;
    }

    set StatusConteudo(statusConteudo) {
      this._statusConteudo = statusConteudo;
    }

    set Username(username) {
      this._username = username;
    }

    set Materia(materia) {
      this.materia = materia;
    }

    set DataPublicacao(dataPublicacao) {
      this._dataPublicacao = dataPublicacao;
    }

    set ResumoConteudo(resumoConteudo) {
      this._resumoConteudo = resumoConteudo;
    }

    set TipoConteudo(tipoConteudo) {
      this._tipoConteudo = tipoConteudo;
    }

    set FonteConteudo(fonteConteudo) {
      this._fonteConteudo = fonteConteudo;
    }

}
