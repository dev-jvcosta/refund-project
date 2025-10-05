// Seleciona os elementos do formuláro.
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");


// Seleciona os elementos da lista
const expenseList = document.querySelector("ul");

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

  //Formata o valor no padrão brasileiro
  value = value.toLocaleString("pt-BR", {
    style: "currency", //mooeda
    currency: "BRL" // formato da moeda
  });

  //retorna o valor formatado
  return value;
}

// Captura o evento de submit do formulário para obter os valores inseridos
form.onsubmit = (event) => {
  // Previne o comportamento padrão do formulário de recarregar a página
  event.preventDefault();

  // Cria um novo objeto com os detalhes da despesa
  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text, //pega o texto selecioando na opção
    amount: amount.value,
    created_at: new Date()
  }

  // Chama a função para adicionar o item na lista de despesas
  expenseAdd(newExpense);
}

function expenseAdd(newExpense){
  try{
    // #01 -Cria o elemento para adicionar o item (li) na lista (ul)
    const expenseItem = document.createElement("li");
    expenseItem.classList.add("expense");

    // #02 - Cria o ícone da categoria
    const expenseIcon = document.createElement("img");
    expenseIcon.setAttribute("src", `./img/${newExpense.category_id}.svg`);
    expenseIcon.setAttribute("alt", newExpense.category_name);

    // #03 - Adiciona as informações no item
    expenseItem.append(expenseIcon);

    // #04 - Adiciona o item na lista
    expenseItem.append(expenseList);


  } catch (error){
    alert("Não foi possível adicionar a lista despesa");
    console.error(error);
  }
}