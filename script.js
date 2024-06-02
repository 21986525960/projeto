// Função para lidar com o envio do formulário de cadastro
function handleFormSubmit(event) {
    event.preventDefault();
    document.getElementById('successMessage').style.display = 'block';
    document.getElementById('cadastroForm').reset();
}

// Função para adicionar uma nova transação e atualizar a interface
let transactions = [];

function addTransaction(event) {
    event.preventDefault();

    const type = document.getElementById('type').value;
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);

    const transaction = {
        id: generateId(),
        type,
        description,
        amount
    };

    transactions.push(transaction);
    updateDOM();
    document.getElementById('budgetForm').reset();
}

// Função para gerar um ID único para cada transação
function generateId() {
    return Math.floor(Math.random() * 1000000);
}

// Função para atualizar a lista de transações e o resumo financeiro na interface
function updateDOM() {
    const transactionsList = document.getElementById('transactionsList');
    transactionsList.innerHTML = '';

    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach(transaction => {
        const li = document.createElement('li');
        li.classList.add(transaction.type === 'receita' ? 'receita' : 'despesa');
        li.innerHTML = `${transaction.description}: R$ ${transaction.amount.toFixed(2)}`;

        transactionsList.appendChild(li);

        if (transaction.type === 'receita') {
            totalIncome += transaction.amount;
        } else {
            totalExpense += transaction.amount;
        }
    });

    const balance = totalIncome - totalExpense;

    document.getElementById('totalIncome').innerText = totalIncome.toFixed(2);
    document.getElementById('totalExpense').innerText = totalExpense.toFixed(2);
    document.getElementById('balance').innerText = balance.toFixed(2);
}