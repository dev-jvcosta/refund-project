// Seleciona os elementos do formuláro.
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");


// Seleciona os elementos da lista
const expenseList = document.querySelector("ul");
const expenseQuantity = document.querySelector("aside header p span");

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

function formatCurrencyBRL(value) {

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

// Adiciona um novo item a lista
function expenseAdd(newExpense) {
  try {
    // ----------- AREA DE CRIAÇÃO DOS ELEMENTOS -----------

    // Cria o elemento para adicionar o item (li) na lista (ul)
    const expenseItem = document.createElement("li");
    expenseItem.classList.add("expense");

    // Cria o ícone da categoria
    const expenseIcon = document.createElement("img");
    expenseIcon.setAttribute("src", `./img/${newExpense.category_id}.svg`);
    expenseIcon.setAttribute("alt", newExpense.category_name);

    // Cria o icone de remover
    const removeIcon = document.createElement("img");
    removeIcon.classList.add("remove-icon");
    removeIcon.setAttribute("src", "img/remove.svg");
    removeIcon.setAttribute("alt", "remover");

    // Cria o elemento para adicionar as informações do item
    const expenseInfo = document.createElement("div");
    expenseInfo.classList.add("expense-info");

    // Cria o nome da despesa
    const expenseName = document.createElement("strong");
    expenseName.textContent = newExpense.expense;

    // Cria a categoria da despesa
    const expenseCategory = document.createElement("span");
    expenseCategory.textConetent = newExpense.category_name;

    // Cria o valor da despesa
    const expenseAmount = document.createElement("span");
    expenseAmount.classList.add("expense-amount");



    // ------------------------------------------


    // ----------- AREA PARA ADICIONAR ELEMENTOS -----------

    //adiciona o valor da despesa com o small para formatar o valor e remove o R$ do valor
    expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount.toUpperCase().replace("R$", "")}`;


    // Adiciona o nome e a categoria na div das informações do item
    expenseInfo.append(expenseName, expenseCategory);


    // Adiciona as informações no item
    expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon);

    // Adiciona o item na lista
    expenseList.append(expenseItem);

    // ------------------------------------------

    // Atualiza os totais após adicionar o item
    updateTotals();

  } catch (error) {
    alert("Não foi possível adicionar a lista despesa");
    console.error(error);
  }
}

function updateTotals() {
  try {
    // Recupera todos os items (li) da lista (ul)
    const items = expenseList.children;

    // Atualiza a quantidade de itens na lista com tratamento de escrita
    expenseQuantity.textContent = `${items.length} 
      ${items.length > 1 ? 'despesas' : 'despesa'}`

  } catch (error) {
    console.error("Error updating totals:", error);
    alert("An error occurred while updating totals.");
  }
}