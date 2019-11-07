function buscarTodosConteudos(){
  let conexao = Request.get("req=all", "ConteudoServlet");
}

// function buscarConteudo(topico){
//   let conteudoJSON = encapsularBuscarConteudo(topico);
//   Request.get("tipo="+conteudoJSON+
//               "&req="+"especifco", ConteudoServlet).then(function(resultado) {
//                       resultado = transformaEmConteudo(resultado);
//                       imprimeConteudo(resultado);
//               });
// }
//
// function buscarConteudoCodigo(codigo){
//   let conteudoJSON = encapsularBuscarConteudoCodigo(codigo);
//   Request.get(SERVER_URL+
//               "tipo="+conteudoJSON+
//               "&req="+"codigo"
//                 ).then(function(resultado) {
//                       resultado = transformaEmConteudo(resultado);
//                       mostraConteudo(resultado);
//               });
// }
//
// function transformaEmConteudo(resultado){
//   let conteudo = new Conteudo(null);
//   conteudo.fromJSON(resultado);
//   return conteudo;
// }
