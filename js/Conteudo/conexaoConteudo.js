function buscarTodosConteudos(){
  let conexao = Request.get("req=all", "ConteudoServlet");
      conexao.then(function(resultado){
        let conteudoVeto = [];
        conteudoVeto[0] = transformaEmConteudo(JSON.parse(resultado)[0]);
    imprimeTodosConteudos(conteudoVeto);
    console.log(conteudoVeto);
    });

}

function buscarConteudoMateria(materia) {
  let conteudoJSON = encapsularBuscarConteudoMateria(materia);
  let conexao = Request.get("tipo="+conteudoJSON+"&req=materia", "ConteudoServlet");

      conexao.then(function(resultado) {
        let conteudoVeto = [];
        for (var i = 0; i < resultado.length; i++) {
          conteudoVeto[i] = transformaEmConteudo(JSON.parse(resultado[i]));
        }
        imprimeTodosConteudo(conteudoVeto);
    });
}

function buscarConteudoTipo(tipo) {
  let conteudoJSON = encapsularBuscarConteudoTipo(tipo);
  let conexao = Request.get("tipo="+conteudoJSON+"&req=materia", "ConteudoServlet");

      conexao.then(function(resultado) {
        for (var i = 0; i < resultado.length; i++) {
        let conteudoVeto = [];
          conteudoVeto[i] = transformaEmConteudo(JSON.parse(resultado[i]));
        }
        imprimeTodosConteudo(conteudoVeto);
    });
}
function buscarConteudoNome(topico){
  let conteudoJSON = encapsularBuscarConteudoNome(topico);
  let conexao = Request.get("tipo="+conteudoJSON+
              "&req=especifco", "ConteudoServlet");

      conexao.then(function(resultado) {
        let conteudoVeto;
        conteudoVeto = transformaEmConteudo(JSON.parse(resultado));
        imprimeTodosConteudo(conteudoVeto);
  });
}

function buscarConteudoUsername(username){
  let conteudoJSON = encapsularBuscarConteudoUsername(username);
  let conexao = Request.get("tipo="+conteudoJSON+
              "&req=usuario", "ConteudoServlet");

      conexao.then(function(resultado) {
        let conteudoVeto = [];
        for (var i = 0; i < resultado.length; i++) {
          resultado[i] = transformaEmConteudo(JSON.parse(resultado[i]));
        }
        imprimeTodosConteudo(conteudoVeto);
    });
}

function buscarConteudoCodigo(codigo){
  let conteudoJSON = encapsularBuscarConteudoCodigo(codigo);
  let conexao = Request.get("tipo="+conteudoJSON+
              "&req=codigo", "ConteudoServlet");
      conexao.then(function(resultado) {
        let conteudoVeto;
            conteudoVeto = transformaEmConteudo(JSON.parse(resultado));
            imprimeConteudo(conteudoVeto);
    });
}

function transformaEmConteudo(resultado){
  let conteudo = new Conteudo();
  conteudo.fromJSON(resultado);
  return conteudo;
}
