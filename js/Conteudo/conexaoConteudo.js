const SERVER_URL = "http://localhost:8080/StayGreen/ConteudoServlet?";

function buscarConteudo(topico){
  let conteudoJSON = encapsularBuscarConteudo(topico);
  Request.get(SERVER_URL+
              "conteudoJSON="+conteudoJSON
                ).then(function(resultado) {
                resultado = transformaEmConteudo(resultado);
                imprimeConteudo(resultado);
              });
}

function transformaEmConteudo(resultado){
  let conteudo = new Conteudo(null);
  conteudo.fromJSON(resultado);
  return conteudo;
}
