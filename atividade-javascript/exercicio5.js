// Exercício 5 - Sistema Completo de Eventos

const evento1 = {
    nome: "Semana da Tecnologia",
    local: "Auditório",
    data: new Date("2026-08-20"),
    participantes: ["Ana", "Carlos", "Marcos"]
};

const evento2 = {
    nome: "Workshop Angular",
    local: "Laboratório 5",
    data: new Date("2026-09-10"),
    participantes: []
};

function exibirEvento(evento) {
    console.log(`Evento: ${evento.nome}`);

    // Exibir local apenas se houver participantes
    if (evento.participantes.length > 0) {
        console.log(`Local: ${evento.local}`);
    }

    console.log();

    // Data formatada no padrão brasileiro
    console.log(evento.data.toLocaleDateString("pt-BR", { timeZone: "UTC" }));
    console.log();

    // Quantidade de participantes
    console.log(`Participantes: ${evento.participantes.length}`);
    console.log();

    // Verificar se existe pelo menos um participante
    if (evento.participantes.length === 0) {
        console.log("Nenhum participante cadastrado");
        console.log();
    }

    // Verificar se a propriedade local existe
    console.log(`Local cadastrado: ${evento.hasOwnProperty("local")}`);
    console.log();

    // Exibir propriedades e valores
    console.log(Object.entries(evento));
    console.log();

    // Tipo de cada propriedade
    for (const chave of Object.keys(evento)) {
        console.log(`${chave}: ${typeof evento[chave]}`);
    }
}

console.log("Entrada 1:");
exibirEvento(evento1);

console.log();
console.log("Entrada 2:");
exibirEvento(evento2);
