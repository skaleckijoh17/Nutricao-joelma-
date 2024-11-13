var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener('click', function(event){
  event.preventDefault();
  
  var form=document.querySelector("#form-adiciona");
  
  //Extraindo os dados digitados no formulário 

var pacienteTr = obtemPacienteDoFormulario(form);
 
 //Criando a linha e a células da tabela do novo paciente
var pacieteTr = montaTr(paciete);

var erro = validaPaciente(paciente);

if(erros.length > 0){
 exibeErros(erros);
 return;
  
}
 
 //Aqui adicionamos a linha com todos os seus dados na tabela do "HTML"
 
 var tabela = document.querySelector("#tabela-pacientes");
 
 tabela.appendChild(pacienteTr);
 form.reset();
});

function exibeErros(erros){  
var ul = document.querySelector("#mensagens-erro);
erros.forEach(function(erro){
  var li= document.createElement("li");
  li.textContent = erro;
  ul.appendChild(li);
});
})


function obtemPacienteDoFormulario(form) {

 var paciente = {
   nome: form.nome.value,
   peso: form.peso.value,
   altura: form.altura.value,
   gordura: form.gordura.value,
   imc: calculaImc(form.peso.value, form.altura.value)
 }
 
 return paciente;
}

function montar (paciente){
 var pacienteTr = document.createElement("tr");
 pacienteTr.classList.add("paciente");
 
  var nomeTd = document.createElement("td");
  nomeTd.classList.add("info-nome");
  nomeTd.textContent = paciente.nome;
  
var nomeTd = montaTd(paciente.nome, "info-nome");
var pesoTd = montarTd(paciente.peso, "info-peso");
var alturaTd = montarTd(paciente.altura, "info-altura");
var gorduraTd = montarTd(paciente.gordura, "info-gordura");
var imcTd = montarTd(paciente.imc, "info-imc");
pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
 pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
 pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
 pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
  
  
 
 return pacienteTr();
 
}



function montarTd (dado,classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  
  return td;
}

function validaPaciente(paciente){
 var erros = [];
 
 if(!validaPeso(paciente.peso)){
   erros.push("peso inválido!")
 }
  return erros;
}

