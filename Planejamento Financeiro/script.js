function calculateBudget() {
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    const result = document.getElementById('result');

    if (isNaN(income) || isNaN(expenses)) {
        result.textContent = 'Por favor, insira valores válidos.';
        return;
    }

    const savings = income - expenses;

    if (savings > 0) {
        result.textContent = `Você está economizando R$${savings.toFixed(2)} por mês.`;
    } else if (savings < 0) {
        result.textContent = `Você está gastando R$${(-savings).toFixed(2)} a mais do que ganha por mês.`;
    } else {
        result.textContent = 'Você está empatando sua renda e despesas sem economizar nada.';
    }
}