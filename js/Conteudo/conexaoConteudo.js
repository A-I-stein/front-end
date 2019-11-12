function buscarTodosConteudos(fn){
  let conexao = Request.get("req=all", "ConteudoServlet");
      conexao.then(function(resultado){
        for (var i = 0; i < JSON.parse(resultado).length; i++) {
          //console.log(JSON.parse(resultado)[i]);
          fn(new Conteudo(JSON.parse(resultado)[i]));
        }
    });
}

function buscarConteudoMateria(materia, fn) {
  let conteudoJSON = encapsularBuscarConteudoMateria(materia);
  let conexao = Request.get("req=materia&tipo="+conteudoJSON, "ConteudoServlet");
      conexao.then(function(resultado) {
        for (var i = 0; i < resultado.length; i++) {

          fn(new Conteudo(JSON.parse(resultado)[i]))

        }
    });
}

function buscarConteudoTipo(tipo, fn) {
  let conteudoJSON = encapsularBuscarConteudoTipo(tipo);
  let conexao = Request.get("req=tipo%tipo="+conteudoJSON, "ConteudoServlet");
      conexao.then(function(resultado) {
        for (var i = 0; i < resultado.length; i++) {
          fn(new Conteudo(JSON.parse(resultado)[i]))
        }
    });
}
function buscarConteudoNome(topico, fn){
  let conteudoJSON = encapsularBuscarConteudoNome(topico);
  let conexao = Request.get("req=especifico&tipo="+conteudoJSON, "ConteudoServlet");
      conexao.then(function(resultado) {
        for (var i = 0; i < resultado.length; i++) {
          fn(new Conteudo(JSON.parse(resultado)[i]))
        }
  });
}

function buscarConteudoUsername(username, fn){
  let conteudoJSON = encapsularBuscarConteudoUsername(username);
  let conexao = Request.get("req=usuario&tipo="+conteudoJSON, "ConteudoServlet");
  conexao.then(function(resultado) {
    for (var i = 0; i < resultado.length; i++) {
      fn(new Conteudo(JSON.parse(resultado)[i]))
    }
  });
}

function buscarConteudoCodigo(codigo, fn){
  let conteudoJSON = encapsularBuscarConteudoCodigo(codigo);
  console.log(conteudoJSON);
  let conexao = Request.get("req=codigo&tipo="+conteudoJSON, "ConteudoServlet");
  conexao.then(function(resultado) {
      fn(new Conteudo(JSON.parse(resultado)))
  });
}

/*
function transformaEmConteudo(resultado){
  let conteudo = new Conteudo();
  conteudo.fromJSON(resultado);
  return conteudo;
}
*/
