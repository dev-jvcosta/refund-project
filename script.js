// Seleciona os elementos do formuláro.
const amount = document.getElementById("amount");

/**
 * Evento: .oninput()
 * Dispara um evento que captura toda informação inserida no input amount, inclusive quando apaga o valor inserioæ
 */

// Captura o evento de input para formatar o valor
amount.oninput = () => {
  
  // Obtém o valor atual do input e remove os caracteres não numéricos
  let value = amount.value.replace(/\D/g, "");

  // transformar o valor em centavos (ex.: 150 / 100 = 1.5 que é igual a R$1,50)
  value = Number(value) / 100;

  // Atualiza o valor do input com o valor formatado
  amount.value = formatCurrencyBRL(value); 

 
};

function formatCurrencyBRL(value){
  value = value.toLocaleString("pt-BR", {
    //Formata o valor no padrão brasileiro
    style: "currency", //mooeda
    currency: "BRL" // formato da moeda
  });
  //retorna o valor formatado
  return value;
}