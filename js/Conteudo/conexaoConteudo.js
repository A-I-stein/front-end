function buscarTodosConteudos(){
  let conexao = Request.get("req=all", "ConteudoServlet");
  window.setTimeout(
    function() {
      conexao.then(function(resultado){
        let conteudoVeto = [];
        for (var i = 0; i < resultado.length; i++) {
          conteudoVeto[i] = transformaEmConteudo(JSON.parse(resultado[i]));
        }
      imprimeTodosConteudos(resultado);
    }
    )}, Math.random() * 2000 + 1000);
}

function buscarConteudoMateria(materia) {
  let conteudoJSON = encapsularBuscarConteudoMateria(materia);
  let conexao = Request.get("tipo="+conteudoJSON+"&req=materia", "ConteudoServlet");
  window.setTimeout(
    function() {
      conexao.then(function(resultado) {
        for (var i = 0; i < resultado.length; i++) {
          resultado[i] = transformaEmConteudo(resultado[i]);
        }
        imprimeTodosConteudo(resultado);
      }
    )}, Math.random() * 2000 + 1000);
}

function buscarConteudoTipo(tipo) {
  let conteudoJSON = encapsularBuscarConteudoTipo(tipo);
  let conexao = Request.get("tipo="+conteudoJSON+"&req=materia", "ConteudoServlet");
  window.setTimeout(
    function() {
      conexao.then(function(resultado) {
        for (var i = 0; i < resultado.length; i++) {
          resultado[i] = transformaEmConteudo(resultado[i]);
        }
        imprimeTodosConteudo(resultado);
      }
    )}, Math.random() * 2000 + 1000);
}
function buscarConteudoNome(topico){
  let conteudoJSON = encapsularBuscarConteudoNome(topico);
  let conexao = Request.get("tipo="+conteudoJSON+
              "&req=especifco", "ConteudoServlet");
  window.setTimeout(
    function() {
      conexao.then(function(resultado) {
        resultado = transformaEmConteudo(resultado);
        imprimeTodosConteudo(resultado);
      }
    )}, Math.random() * 2000 + 1000);
}

function buscarConteudoUsername(username){
  let conteudoJSON = encapsularBuscarConteudoUsername(username);
  let conexao = Request.get("tipo="+conteudoJSON+
              "&req=usuario", "ConteudoServlet");
  window.setTimeout(
    function() {
      conexao.then(function(resultado) {
        for (var i = 0; i < rasultado.length; i++) {
          rasultado[i] = transformaEmConteudo(resultado[i]);
        }
        imprimeTodosConteudo(resultado);
      }
    )}, Math.random() * 2000 + 1000);
}

function buscarConteudoCodigo(codigo){
  let conteudoJSON = encapsularBuscarConteudoCodigo(codigo);
  let conexao = Request.get("tipo="+conteudoJSON+
              "&req=codigo", "ConteudoServlet");
  window.setTimeout(
    function() {
      conexao.then(function(resultado) {
            resultado = transformaEmConteudo(resultado);
            imprimeConteudo(resultado);
      }
    )}, Math.random() * 2000 + 1000);
}

function transformaEmConteudo(resultado){
  let conteudo = new Conteudo(null);
  conteudo.fromJSON(resultado);
  return conteudo;
}
