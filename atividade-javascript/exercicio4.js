// Exercício 4 - Sistema de Controle Financeiro

// Entrada 1
const gastos1 = ["500", "350.50", "1000"];

// Entrada 2
const gastos2 = ["800", "900", "700"];

function calcularTotal(gastos) {
    let total = 0;

    for (let i = 0; i < gastos.length; i++) {
        const valor = parseFloat(gastos[i]);

        // Ignorar valores inválidos
        if (Number.isNaN(valor)) {
            continue;
        }

        total += valor;
    }

    return total;
}

function exibirRelatorio(gastos) {
    const total = calcularTotal(gastos);

    // Exibir total sem casas decimais desnecessárias
    const totalFormatado = Number.isInteger(total) ? total : total.toFixed(2);
    console.log(`Total: R$ ${totalFormatado}`);
    console.log();

    if (total > 2000) {
        console.log("Limite ultrapassado");
    } else {
        console.log("Gastos dentro do limite");
    }
}

console.log("Entrada 1:");
exibirRelatorio(gastos1);

console.log();
console.log("Entrada 2:");
exibirRelatorio(gastos2);
