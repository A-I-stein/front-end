
/**
 * Envia dados para o Servlet para Compra de máquinas.
 * @param {int} codQuestionario inteiro representando o ID do questionario;
 * @param {String} materia representando a materia do questionario;
 * @returns {String} Retorna uma string com formatação JSON;
 * @author Guilherme Sena
 */
function encapsularBuscarConteudo(topico){
    let conteudo = new Conteudo(0);
    conteudo.nomeConteudo = topico;

    return conteudo.toJSON();
}
