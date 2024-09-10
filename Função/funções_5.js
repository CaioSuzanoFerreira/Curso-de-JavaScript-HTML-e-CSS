function filtrarArray(array, funcaoFiltro)
    {
        let arrayFiltrado = [];

        for (let elemento of array)
            {
                if (funcaoFiltro(elemento))
                    {
                        arrayFiltrado.push(elemento);
                    }
            }
        
        return arrayFiltrado;
    }

function ehPar(numero)
    {
        return numero % 2 === 0;
    }

function maiorQueDez(numero)
    {
        return numero > 10;
    }

let numeros = [1, 2, 3, 4, 5, 9, 10, 11, 12, 17, 19];

let numerosPares = filtrarArray(numeros, ehPar);

let numerosMaioresQueDez = filtrarArray(numeros, maiorQueDez);

console.log(numerosPares);

console.log(numerosMaioresQueDez);

/////////////////////////////////////////////////////////


function aplicarOperacao(numeros, operacao)
    {
        let resultado = [];

        for (let numero of numeros)
            {
                resultado.push(operacao(numero))
            }

        return resultado;
    }

function dobrar(valor)
    {
        return valor * 2
    }

    function incrementar(valor)
    {
        return valor + 1;
    }


let array_numeros = [1, 2, 3, 4, 5]

let numerosDobrado = aplicarOperacao(array_numeros, dobrar);

let numerosIncrementados = aplicarOperacao(array_numeros, incrementar);

console.log(numerosDobrado)

console.log(numerosIncrementados)


//////////////////////////////////////////////////////

const produtos = [
        {nome: "Caderno", categoria: "Papelaria", preco: 10 },
        {nome: "Lápis", categoria: "Papelaria", preco: 2 },
        {nome: "Teclado", categoria: "Eletrônicos", preco: 100 },
        {nome: "Mouse", categoria: "Eltrônicos", preco: 50 },
    ]

function filtro(produtos, valorMinimo)
    {
      return produtos.filter(produto => produto.preco > valorMinimo);
    }

function aumentarPreco(produtos, porcentagem)
    {
        //Utiliza o .map para aplicar a função de callback para cada elemento do array, retornando um novo array com os resultados
        return produtos.map(produto => ({
            //os "..." é usado para copiar as propriedades do produto original e em seguida atualiza-lo com o novo valor aumentado
             ...produto,
             preco: produto.preco * (1 + porcentagem / 100)
        }))
    }

const produtosFiltrados = filtro(produtos, 20);

const produtosComPrecoAumentado = aumentarPreco(produtosFiltrados, 10);

console.log(produtosComPrecoAumentado)