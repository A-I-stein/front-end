const SERVER_URL = "http://localhost:8080/StayGreen/QuestionarioServlet?";

function buscarQuestionario(materia){
  let questionarioJSON = encapsularBuscarQuestionario(codQuestionario, materia);
  Request.get(SERVER_URL+
              "questionarioJSON="+questionarioJSON
                ).then(function(resultado) {
                resultado = transformaEmQuestionario(resultado);
                imprimeQuestionario(resultado);
              });
}

function transformaEmQuestionario(resultado){
  let questionario = new Questionario(null);
  questionario.fromJSON(resultado);
  return questionario;
}
