function imprimeQuestionario(questionario){
/*codigo*/
}

let botaoIniciarQuestionario = document.getElementsByName("botaoIniciarQuestionario");


  botaoIniciarQuestionario[0].addEventListener("click", function(){
    let materia = document.getElementsByName("materiaEscolha"),
        questionario = document.getElementsByName("questionarioEscolha");
        console.log(materia[0]);

    materia = materia[0].options[materia[0].selectedIndex].value;
    questionario = questionario[0].options[questionario[0].selectedIndex].value;
    console.log(materia);
  })
