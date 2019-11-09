/*
* Classe objeto para a encapsulação de dados do Patrimonio.
 * @author Italo Fideles
*/

class Conteudo{

      constructor(){
            this.codConteudo = "";
            this.nomeConteudo = "";
            this.textoConteudo = "";
            this.statusConteudo = "";
            this.username = "";
            this.materia = "";
            this.dataPublicacao = "";
            this.resumoConteudo = "";
            this.tipoConteudo = "";
            this.fonteConteudo = "";
        }



      printToConsole(){
        console.log("CodConteudo: " + this.codConteudo);
        console.log("NomeConteudo: " + this.nomeConteudo);
        console.log("TextoConteudo: " + this.textoConteudo);
        console.log("StatusConteudo: " + this.statusConteudo);
        console.log("Username: " + this.username);
        console.log("Materia: " + this.materia);
        console.log("DataPublicacao: " +  this.dataPublicacao);
        console.log("ResumoConteudo: " + this.resumoConteudo);
        console.log("TipoConteudo: " + this.tipoConteudo);
        console.log("FonteConteudo: " + this.fonteConteudo);
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
        "codConteudo" : this.codConteudo,
        "nomeConteudo" : this.nomeConteudo,
        "textoConteudo" : this.textoConteudo,
        "statusConteudo" : this.statusConteudo,
        "username" : this.username,
        "materia" : this.materia,
        "dataPublicacao" :  this.dataPublicacao,
        "resumoConteudo" : this.resumoConteudo,
        "tipoConteudo" : this.tipoConteudo,
        "fonteConteudo" : this.fonteConteudo,
      }
      return JSON.stringify(conteudoJSON);
    }

    /**
   * Coloca valores nas váriaveis de conteudo a partir de um JSON
   * @param {string} questionarioString com formatação JSON do objeto.
   * @author Italo Fideles
   */
    fromJSON(conteudoJSON){
      this.codConteudo  = conteudoJSON.codConteudo;
      this.nomeConteudo = conteudoJSON.nomeConteudo;
      this.textoConteudo = conteudoJSON.textoConteudo;
      this.statusConteudo = conteudoJSON.statusConteudo;
      this.username = conteudoJSON.username;
      this.materia  = conteudoJSON.materia;
      this.dataPublicacao = conteudoJSON.dataPublicacao;
      this.resumoConteudo = conteudoJSON.resumoConteudo;
      this.tipoConteudo = conteudoJSON.tipoConteudo;
      this.fonteConteudo = conteudoJSON.fonteConteudo;
    }

    //getter

    get CodConteudo() {
        return this.codConteudo;
    }

    get NomeConteudo() {
        return this.nomeConteudo;
    }

    get TextoConteudo() {
        return this.textoConteudo;
    }

     get StatusConteudo() {
        return this.statusConteudo;
    }

    get Username() {
        return this.username;
    }

    get Materia() {
        return this.materia;
    }

    get DataPublicacao() {
        return this.dataPublicacao;
    }

    get ResumoConteudo() {
        return this.resumoConteudo;
    }

    get TipoConteudo() {
        return this.tipoConteudo;
    }

    get FonteConteudo() {
        return this.fonteConteudo;
    }

    //setter

    set CodConteudo(codConteudo) {
      this.codConteudo = this.tryParse(codConteudo);
    }

    set NomeConteudo(nomeConteudo) {
      this.nomeConteudo = nomeConteudo;
    }

    set TextoConteudo(textoConteudo) {
      this.textoConteudo = textoConteudo;
    }

    set StatusConteudo(statusConteudo) {
      this.statusConteudo = statusConteudo;
    }

    set Username(username) {
      this.username = username;
    }

    set Materia(materia) {
      this.materia = materia;
    }

    set DataPublicacao(dataPublicacao) {
      this.dataPublicacao = dataPublicacao;
    }

    set ResumoConteudo(resumoConteudo) {
      this.resumoConteudo = resumoConteudo;
    }

    set TipoConteudo(tipoConteudo) {
      this.tipoConteudo = tipoConteudo;
    }

    set FonteConteudo(fonteConteudo) {
      this.fonteConteudo = fonteConteudo;
    }

}
