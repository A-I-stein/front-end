
/**
 * Envia dados para o Servlet para Conteudo.
 * @param {int} codConteudo inteiro representando o ID do conteudo;
 * @param {String} nomeConteudo representando o nome do conteudo;
 * @returns {String} Retorna uma string com formatação JSON;
 * @author Italo Fideles
 */
function encapsularBuscarConteudo(topico){
    let conteudo = new Conteudo(0);
    conteudo.nomeConteudo = topico;

    return conteudo.toJSON();
}

function encapsularBuscarConteudoCodigo(codigo){
    let conteudo = new Conteudo(0);
    conteudo.codConteudo = codigo;
    return conteudo.toJSON();
}
