function calcularGastos() {
    const despesasEssenciais = parseFloat(document.getElementById('essenciais').value);
    const despesasNaoEssenciais = parseFloat(document.getElementById('naoEssenciais').value);
    const rendaMensal = parseFloat(document.getElementById('renda').value);

    if (isNaN(despesasEssenciais) || isNaN(despesasNaoEssenciais) || isNaN(rendaMensal)) {
        document.getElementById('resultado').textContent = 'Por favor, insira valores válidos.';
        return;
    }

    const totalDespesas = despesasEssenciais + despesasNaoEssenciais;
    const saldo = rendaMensal - totalDespesas;

    let mensagem = `Despesas Totais: R$ ${totalDespesas.toFixed(2)}\n`;
    mensagem += `Saldo: R$ ${saldo.toFixed(2)}\n`;

    if (saldo < 0) {
        mensagem += 'Você está gastando mais do que ganha! Considere reduzir suas despesas.';
    } else {
        mensagem += 'Bom trabalho! Você está gerenciando bem seus gastos.';
    }

    document.getElementById('resultado').textContent = mensagem;
}