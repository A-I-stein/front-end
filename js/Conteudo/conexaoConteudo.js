const SERVER_URL = "http://localhost:8080/StayGreen/ConteudoServlet?";

function buscarTodosConteudos(){
  Request.get(SERVER_URL+
              "req="+"all"
                ).then(function(resultado) {
                  for(i = 0; i < resultado.length; i++){
                      resultado[i] = transformaEmConteudo(resultado[i]);
                  }
                imprimeTodosConteudos(resultado);
              });
}

function buscarConteudo(topico){
  let conteudoJSON = encapsularBuscarConteudo(topico);
  Request.get(SERVER_URL+
              "tipo="+conteudoJSON+
              "&req="+"especifco"
                ).then(function(resultado) {
                      resultado = transformaEmConteudo(resultado);
                      imprimeConteudo(resultado);
              });
}

function buscarConteudoCodigo(codigo){
  let conteudoJSON = encapsularBuscarConteudoCodigo(codigo);
  Request.get(SERVER_URL+
              "tipo="+conteudoJSON+
              "&req="+"codigo"
                ).then(function(resultado) {
                      resultado = transformaEmConteudo(resultado);
                      mostraConteudo(resultado);
              });
}

function transformaEmConteudo(resultado){
  let conteudo = new Conteudo(null);
  conteudo.fromJSON(resultado);
  return conteudo;
}
