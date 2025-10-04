// Seleciona os elementos do formuláro.
const amount = document.getElementById("amount");

/**
 * Evento: .oninput()
 * Dispara um evento que captura toda informação inserida no input amount, inclusive quando apaga o valor inserioæ
 */
amount.oninput = () => {
  /**
   *  / \D /g, ""
   *  \D = Remove tudo que não for número
   *  g = Global, ou seja, remove todos os caracteres que não forem números
   *  "" = Substitui por nada, ou seja, remove os caracteres que não forem números
   *  value = Pega o valor do input amount e aplica a máscara
   */
  let value = amount.value.replace(/\D/g, ""); 
  amount.value = value; // Atualiza o valor do input amount com a máscara aplicada
};
