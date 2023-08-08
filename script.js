let produto = {
    nome: 'Notebook',
    valor: 3000.00,
    liquidacao: true,
    distribuidor: 'lojadakenzie.com.br'
}

const produtoName = document.getElementsByClassName("produto")[0]
const valor = document.getElementsByClassName("valor")[0]
const liquidacao = document.getElementsByClassName("liquidacao")[0]
const liquidacaoTrue = document.getElementsByClassName("liquidacaoTrue")[0]

produtoName.innerText = produto.nome;
valor.innerText = produto.valor.toFixed(2);

function calculaDesconto(produto) {
    let desconto = (produto.valor - (produto.valor * 0.3)).toFixed(2);
    return desconto
}


liquidacao.addEventListener("click", function() {
    if (produto.liquidacao == true) {
        if (liquidacaoTrue.innerText == "") {
            liquidacaoTrue.innerText = `Hoje apenas: ${calculaDesconto(produto)}`
        } else {
            liquidacaoTrue.innerText = ""
        }
    }
})