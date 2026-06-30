// Exercício 3 - Sistema de Biblioteca

// Entrada 1
const autores1 = "Machado de Assis,Clarice Lispector,Monteiro Lobato";

// Entrada 2
const autores2 = "J. K. Rowling,J. R. R. Tolkien";

function criarRegistroLivro(titulo, autor) {
    return `Livro: "${titulo}" — Autor: ${autor}`;
}

function exibirBiblioteca(autores, autorBuscado, titulo) {
    // Transformar string em array
    const listaAutores = autores.split(",");

    // Exibir cada autor
    for (const autor of listaAutores) {
        console.log(autor);
    }

    console.log();

    // Verificar se o autor existe
    if (listaAutores.includes(autorBuscado)) {
        console.log("Autor encontrado");
    } else {
        console.log("Autor não encontrado");
    }

    console.log();

    // Exibir registro do livro com template literal
    console.log(criarRegistroLivro(titulo, autorBuscado));

    console.log();

    // Exibir lista com join
    console.log(listaAutores.join(", "));
}

console.log("Entrada 1:");
exibirBiblioteca(autores1, "Clarice Lispector", "A Hora da Estrela");

console.log();
console.log("Entrada 2:");
exibirBiblioteca(autores2, "Clarice Lispector", "A Hora da Estrela");
