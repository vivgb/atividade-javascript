// Exercício 2 - Sistema de Matrícula Acadêmica

const disciplinas1 = ["HTML", "CSS", "JavaScript"];

const disciplinas2 = ["Banco de Dados", "", "TCC", "Redes"];

function exibirMatricula(disciplinas) {
    for (let i = 0; i < disciplinas.length; i++) {
        if (disciplinas[i] === "") {
            continue;
        }

        console.log(disciplinas[i]);

        if (disciplinas[i] === "TCC") {
            console.log();
            console.log("Laço interrompido");
            break;
        }
    }

    console.log();

    console.log(`Total: ${disciplinas.length}`);
    console.log();

    if (disciplinas.includes("JavaScript")) {
        console.log("Aluno cursa JavaScript");
    } else {
        console.log("Aluno não cursa JavaScript");
    }

    disciplinas.push("Programação Web");
}

console.log("Entrada 1:");
exibirMatricula(disciplinas1);

console.log();
console.log("Entrada 2:");
exibirMatricula(disciplinas2);
