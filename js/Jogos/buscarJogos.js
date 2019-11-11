//
//
//
//
// var planetas = document.querySelectorAll(".planeta");
// var satelites = document.querySelectorAll(".satelite");
// var linhaOrbita = document.querySelectorAll(".orbita");
// var fisicaSol = document.querySelector("#sol");
// var svg = document.querySelector("#svgId");


function buscarTodosJogos(fn){
  let conexao = Request.get("req=buscarTodos", "JogoServlet");
  conexao.then(function(resultado){
  for (var i = 0; i < JSON.parse(resultado).length; i++) {
     fn(new Jogo(JSON.parse(resultado)[i]));
  }
  });
}

function buscarMateriaId(id, fn){
  let conexao = Request.get("req=buscarId&tipo=" + id, "MateriaServlet");
  conexao.then(function(resultado){
    fn(new Materia(JSON.parse(resultado)));
  });
}




materiaParaJogo();


function materiaParaJogo() {
  buscarTodosJogos(function(jogo) {
    buscarMateriaId(jogo.codMatJogo, function(materia) {
      console.log(materia);
    });
  });
}
