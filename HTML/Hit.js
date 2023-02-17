
function submeter_resultados() {
    const survey = document.querySelector(".survey");
    const formulario = document.querySelector(".form");
    const acompanhamentos = document.querySelector(".acompanhamentos");
    const parte2 = document.querySelector(".parte2");
    const primeiras_respostas = document.querySelector(".dishes");

    primeiras_respostas.style.display= "block";
    formulario.style.display= "block";
    acompanhamentos.style.display= "block";
    survey.style.display= "none";
    parte2.style.display= "block";

    document.getElementById("objetivo").innerHTML = tipo_objetivo.value;
    document.getElementById("alimentacao").innerHTML = tipo_alimentacao.value;
    document.getElementById("restricoes").innerHTML = tipo_restricoes.value;


    const alim = document.querySelector(".tipo_alimentacao");
    const omni = document.querySelectorAll(".omni");

    if(alim.value == "Vegetariano"){

      for (const image of omni) {
        image.style.display = 'none';
      }
    }
}

function submeter_pratos() {
  const formulario = document.querySelector(".form");
  const acompanhamentos = document.querySelector(".acompanhamentos");
  const finalizar_hit = document.querySelector(".finalizar");
  const justicacao = document.querySelector(".just");
  
  formulario.style.display= "none";
  acompanhamentos.style.display= "none";
  finalizar_hit.style.display= "block";
  justicacao.style.display= "block";
  let flag = false;

  const input = document.querySelectorAll('.imagens');
  const div = document.getElementsByName('div');


  for (let i = 0; i < input.length; i++) {
    
    if (input[i].checked) {

      input[i].checked = true;
      flag = true;

    } else {
      const div = document.getElementsByName('div');

      div[i].style.display = 'none';
      input[i].disabled = true;
    } 
  }

  if (flag == false) {
    alert("Tem de escolher pelo menos uma opcao");

    for (let l = 0; l < input.length; l++) {
      div[l].style.display = "block";
      input[l].disabled = false;
      finalizar_hit.style.display= "none";
      formulario.style.display= "block";
      acompanhamentos.style.display= "block";
      justicacao.style.display= "none";
    }
  }
}

function Final(){
  return true; 
}
