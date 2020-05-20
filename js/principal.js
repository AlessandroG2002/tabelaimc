var quant = 0;

var paciente = document.querySelectorAll(".paciente"); 
console.log(paciente);

while ( quant < paciente.length ) {
    var tdNome = paciente[quant].querySelector(".info-nome"); 
    var nome = tdNome.textContent;
    console.log("Nome:",nome);

    var tdPeso = paciente[quant].querySelector(".info-peso"); 
    var peso = tdPeso.textContent;
    console.log("Peso:",peso); 

    var tdAltura = paciente[quant].querySelector(".info-altura"); 
    var altura = tdAltura.textContent; 
    console.log("Altura:",altura); 

    var imc = peso / (altura * altura);
    console.log("IMC:",imc);

    paciente[quant].querySelector(".info-imc").textContent = imc;

    console.log("=====");

    quant++;
}