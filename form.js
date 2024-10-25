var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener('click', function(event){
  event.preventDefault();
  
  var form=document.querySelector("#form-adiciona");
  
  //Extraindo os dados digitados no formulário 

 var paciente = obtemPacienteDoFormulario(form);
 console.log(paciente);
 
 //Criando a linha e a células da tabela do novo paciente

 var pacienteTr = document.createElement("tr");

 var nomeTd = document.createElement("td");
 var pesoTd = document.createElement("td");
 var alturaTd = document.createElement("td");
 var gorduraTd = document.createElement("td");
 var imcTd = document.createElement("td");

 nomeTd.textContent = nome;
 pesoTd.textContent = peso;
 alturaTd.textContent = altura;
 gorduraTd.textContent = gordura;
 imcTd.textContent = calculaImc(peso, altura);

 pacienteTr.appendChild(nomeTd);
 pacienteTr.appendChild(pesoTd);
 pacienteTr.appendChild(alturaTd);
 pacienteTr.appendChild(gorduraTd);
 pacienteTr.appendChild(imcTd);
 
 //Aqui adicionamos a linha com todos os seus dados na tabela do "HTML"
 
 var tabela = document.querySelector("#tabela-pacientes");
 
 tabela.appendChild(pacienteTr);
});

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
