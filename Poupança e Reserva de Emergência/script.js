// scripts.js

function calculate() {
    const monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value);
    const monthlyExpenses = parseFloat(document.getElementById('monthlyExpenses').value);
    const emergencyMonths = parseFloat(document.getElementById('emergencyMonths').value);

    if (isNaN(monthlyIncome) || isNaN(monthlyExpenses) || isNaN(emergencyMonths)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    const monthlySavings = monthlyIncome - monthlyExpenses;
    const emergencyFund = monthlyExpenses * emergencyMonths;

    document.getElementById('savings').textContent = monthlySavings.toFixed(2);
    document.getElementById('emergencyFund').textContent = emergencyFund.toFixed(2);
}