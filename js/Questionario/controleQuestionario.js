vetorQuestoes = [];
vetorRespostasSalvas = [];
contador = 0;

function inserirQuestionario(questionario){
  console.log(questionario);
  vetorQuestoes[contador] = questionario;
  contador = contador + 1;
  if (contador == 9) {
    contador = 0;
    imprimirQuestionario();
  }
}

function imprimirQuestionario(){
  secaoEscolha.style.display = "none";
  secaoQuestoes.style.display = "block";

  let respostaEscolhida = document.getElementsByName("Resposta"),
      escolha = null;

  let vetorRespostas = [];
      vetorRespostas[0] = vetorQuestoes[contador].descRespCorreta;
      vetorRespostas[1] = vetorQuestoes[contador].descRespIncorreta1;
      vetorRespostas[2] = vetorQuestoes[contador].descRespIncorreta2;
      vetorRespostas[3] = vetorQuestoes[contador].descRespIncorreta3;

  shuffle(vetorRespostas);

  let inputResposta = document.getElementsByName("Resposta"),
      descResposta = document.getElementsByName("respDescricao"),
      inputPergunta = document.getElementsByName("pergunta");


  for (var i = 0; i < inputResposta.length; i++) {
    inputResposta[i].value = vetorRespostas[i];
    descResposta[i].innerHTML = vetorRespostas[i];
  }

  inputPergunta[0].innerHTML = vetorQuestoes[contador].descPergunta;



  let botaoProximaQuestao = document.getElementsByName("proximaQuestao"),
      botaoRetornarQuestao = document.getElementsByName("retornarQuestao");


  botaoProximaQuestao[0].addEventListener("click", function () {


    for (var i = 0; i < respostaEscolhida.length; i++) {
      if (respostaEscolhida[i].checked) {
        escolha = respostaEscolhida[i].value;
        respostaEscolhida[i].checked = false;
      }
    }
    console.log(escolha);

    if (escolha != null) {
      vetorRespostasSalvas[contador] = escolha;
      console.log(contador);
      escolha = null;
      contador ++;
      imprimirQuestionario();
    }

  })

  botaoRetornarQuestao[0].addEventListener("click", function () {

      contador = contador - 1;
      console.log(contador);
      imprimirQuestionario();

  })




}



function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}



let botaoIniciarQuestionario = document.getElementsByName("botaoIniciarQuestionario"),
    secaoQuestoes = document.querySelector(".questoes"),
    secaoEscolha = document.querySelector(".modalEscolha");




  botaoIniciarQuestionario[0].addEventListener("click", function(){
    let materia = document.getElementsByName("materiaEscolha");
        console.log(materia[0]);
    materia = materia[0].options[materia[0].selectedIndex].value;

      buscarQuestionarioMateria(materia, function(conteudo){
          inserirQuestionario(conteudo);
      })
  })
