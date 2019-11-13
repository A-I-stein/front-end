function buscarQuestionarioMateria(materia, fn) {
  let questionarioJSON = encapsularBuscarQuestionario(materia);
  let conexao = Request.get("req=all&tipo="+questionarioJSON, "QuestionarioServlet");
      conexao.then(function(resultado) {
        for (var i = 0; i < resultado.length; i++) {
          fn(new Questao(JSON.parse(resultado)[i]))
        }
    });
}

/*
function transformaEmQuestionario(resultado){
  let questionario = new Questionario(null);
  questionario.fromJSON(resultado);
  return questionario;
}
*/
