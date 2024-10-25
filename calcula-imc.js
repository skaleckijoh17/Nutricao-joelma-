var titulo = document.querySelector(".titulo");
titulo.textContent = "Joelma Nutrição";

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for(var i = 0; i < 5; i++) {
  console.log(pacientes[i]);
  
  var tdPeso = pacientes[i].querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = pacientes[i].querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = pacientes[i].querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true; 



if (peso < 0 || peso > 600){
  tdImc.textContent = "peso inválido";
  pesoEhValido = false;
  pacientes[i].classList.add("dado-invalido");
}

if (altura < 0 || altura > 2.00){
  tdImc.textContent = "altura-invalida"
  alturaEhValida = false;
  pacientes[i].classList.add("dados-invalidos");
}

if(pesoEhValido && alturaEhValida){
  var imc = calculaImc / (peso, altura);
  tdImc.textContent = imc;
}
}

function calculaImc(peso, altura) {
  var imc = 0;
  
  imc = peso / (altura * altura);
  
  return imc.toFixed(2);
}
