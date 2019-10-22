
/**
 * Envia dados para o Servlet para Compra de máquinas.
 * @param {int} codQuestionario inteiro representando o ID do questionario;
 * @param {String} materia representando a materia do questionario;
 * @returns {String} Retorna uma string com formatação JSON;
 * @author Guilherme Sena
 */
function encapsularBuscarQuestionario(codQuestionario, materia){
    let questionario = new Questionario(0);
    questionario.codQuestionario = codQuestionario;
    questionario.materia = materia;

    return questionario.toJSON();
}
