vetorQuestoes = [];
vetorRespostasSalvas = [];
contador = 0;

function inserirQuestionario(questionario){
  console.log(questionario);
  vetorQuestoes[contador] = questionario;
  contador = contador + 1;
  if (contador == 10) {
    contador = 0;
    imprimirQuestionario();
  }
}

function imprimirQuestionario(){
  if (contador == 0) {
    botaoRetornarQuestao[0].style.display = "none";
  }
  else{
    botaoRetornarQuestao[0].style.display = "block";
  }
  if (contador == 9) {
    botaoProximaQuestao[0].style.display = "none";
  }
  else{
    botaoProximaQuestao[0].style.display = "block";
  }
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
  console.log(contador);
}

function finalizarQuestionario() {
  let acertos = 0;

  for (var i = 0; i < vetorQuestoes.length; i++) {
    console.log("corettas: " +vetorQuestoes[i].descRespCorreta);
    console.log("escolhas: " +vetorRespostasSalvas[i]);
    if (vetorQuestoes[i].descRespCorreta == vetorRespostasSalvas[i]) {
        acertos++;
    }
  }
  console.log(acertos);
  document.querySelector(".questoes").style.display = "none";
  document.querySelector(".resultadoFinal").style.display = "block";
  document.querySelector("#acertos").innerHTML = "Voce acertou "
    + acertos + " de 10 questões!"
  console.log(acertos);

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
    secaoEscolha = document.querySelector(".modalEscolha"),
    botaoProximaQuestao = document.getElementsByName("proximaQuestao"),
    botaoRetornarQuestao = document.getElementsByName("retornarQuestao"),
    botaoFinalizarQuestionario = document.getElementsByName("finalizar"),
    botaoAbreMenu = document.getElementsByName("retornarMenu"),
    respostaEscolhida = document.getElementsByName("Resposta"),
        escolha = null;
        console.log(botaoFinalizarQuestionario);




  botaoIniciarQuestionario[0].addEventListener("click", function(){
    let materia = document.getElementsByName("materiaEscolha");
        console.log( materia[0].options[materia[0].selectedIndex].value);
    materia = materia[0].options[materia[0].selectedIndex].value;

      buscarQuestionarioMateria(materia, function(conteudo){
          inserirQuestionario(conteudo);
      })

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
          console.log(contador);
          imprimirQuestionario();
        }

      })

      botaoRetornarQuestao[0].addEventListener("click", function () {
        for (var i = 0; i < respostaEscolhida.length; i++) {
            respostaEscolhida[i].checked = false;
        }
          console.log(contador);
          contador = contador - 1;
          console.log(contador);
          imprimirQuestionario();

      })

      botaoFinalizarQuestionario[2].addEventListener("click", function(){

        for (var i = 0; i < respostaEscolhida.length; i++) {
          if (respostaEscolhida[i].checked) {
            escolha = respostaEscolhida[i].value;
            respostaEscolhida[i].checked = false;
          }
        }
        vetorRespostasSalvas[contador] = escolha;
        finalizarQuestionario();
        console.log(vetorRespostasSalvas);
      })
      botaoAbreMenu[0].addEventListener("click", function(){
        vetorQuestoes = [];
        vetorRespostasSalvas = [];
        contador = 0;
        document.querySelector(".modalEscolha").style.display = "block";
        document.querySelector(".resultadoFinal").style.display = "none";
      })
  })
