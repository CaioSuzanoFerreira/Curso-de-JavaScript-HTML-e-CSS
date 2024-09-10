let nome = "Caio";

function saudar()
    {
        //variáveis declaradas dentro de uma função só podem ser acessadas dentro da mesma
        let mensagem = "Olá, ";

        return mensagem + nome;
    }

console.log(saudar());

////////////////////////////////////

function criarContador()
    {
        let contador = 0;

        function incrementar()
        {
            contador ++;
            
            console.log(contador);
        }

        return incrementar;
    }

const meuContador = criarContador();

meuContador();

meuContador();

/////////////////////////////////////////

let estoque = 
    {
        canetas: 10,
        cadernos: 5,
        borrachas: 7
    };

function ajustarEstoque(produto, qtd)
    {
        //se o produto não for indefinido o if será executado 
         if (estoque[produto] !== undefined)
            {
                estoque[produto] += qtd;
                return estoque[produto];
            }
        else
            {
                console.log("Produto não encontrado no estoque.");
                return null;
            }
  
    }

console.log(`Estoque de canetas antes do ajuste: ${estoque.canetas}`);

let estoqueCanetasAtualizado = ajustarEstoque('canetas', 5);
console.log(`Estoque de canetas após o ajuste: ${estoqueCanetasAtualizado}`);

let estoqueCadernosAtualizado = ajustarEstoque('cadernos', -3);
console.log(`Estoque de cadernos após o ajuste ${estoqueCadernosAtualizado}`);