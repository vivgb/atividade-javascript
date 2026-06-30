// Exercício 1 - Sistema de Cadastro de Produtos

const produto1 = {
    nome: "Monitor",
    categoria: "Informática",
    preco: "899.90",
    estoque: 5
};

const produto2 = {
    nome: "Cadeira",
    categoria: "Escritório",
    preco: "450",
    estoque: 30
};

function exibirProduto(produto) {
    produto.preco = parseFloat(produto.preco);

    if (Number.isNaN(produto.preco)) {
        console.log("Preço inválido.");
        return;
    }

    console.log(`Produto: ${produto.nome}`);
    console.log(`Categoria: ${produto.categoria}`);

    // Exibe sem .00 quando o valor for inteiro
    const precoFormatado = Number.isInteger(produto.preco)
        ? produto.preco
        : produto.preco.toFixed(2);
    console.log(`Preço: R$ ${precoFormatado}`);
    console.log();

    if (produto.estoque < 10) {
        console.log("Estoque baixo");
    } else {
        console.log("Estoque adequado");
    }

    console.log();
    console.log(Object.keys(produto));
    console.log();

    console.log("Propriedades e valores:");
    for (const chave of Object.keys(produto)) {
        console.log(`${chave}: ${produto[chave]}`);
    }

    console.log();

    console.log("Tipo de cada informação:");
    for (const chave of Object.keys(produto)) {
        console.log(`${chave}: ${typeof produto[chave]}`);
    }
}

console.log("Entrada 1:");
exibirProduto(produto1);

console.log();
console.log("Entrada 2:");
exibirProduto(produto2);
