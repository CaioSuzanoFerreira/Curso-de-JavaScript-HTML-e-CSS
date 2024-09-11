function criarContador() 
    {
        let count = 0;

        return {
            
            incrementar: function()
            {
                count += 1

                console.log(`Contagem atual: ${count}`)
            },

            mostrar: function(){
                console.log(`Contagem ${count}`)
            }
        }
    }

const meuContador = criarContador();

meuContador.mostrar();

meuContador.incrementar();
meuContador.incrementar();

meuContador.mostrar();

//////////////////////////////////////////////

function criarAplicadorDeDesconto(valorDesconto)
    {
        return function(preco)
        {
            const desconto = preco * valorDesconto;

            const precoFinal = preco - desconto

            return precoFinal
        };

    }

const aplicarDesconto20 = criarAplicadorDeDesconto(0.20);

const aplicarDesconto10 = criarAplicadorDeDesconto(0.10);

console.log(aplicarDesconto20(100));

console.log(aplicarDesconto10(50));

//////////////////////////////////////////////

function criarCarrinho()
    { 
        const items = [];

        return{
            
            adicionarItem: function (nome, preco, qtd)
            {
                const item = items.find(item => item.nome === nome);

                if (item)
                    {
                        item.qtd += qtd;
                    }
                else
                    {
                        items.push({nome, preco, qtd});
                    }

            },

            removerItem: function(nome)
            {
                let index = items.findIndex(item => item.nome === nome);

                if (index > -1)
                    {
                        items.splice(index, 1);
                    }
            },

            cacularTotal: function()
            {
                return items.reduce((total, item) => total + (item.preco * item.qtd), 0)
            },

            listarItems: function ()
            {
                return items.map (item => `${item.nome} (Preço: R$ $ ${item.preco}, Quantidade: ${item.qtd})`).join(", ");
            }

        };
        
    }

const carrinho = criarCarrinho();

carrinho.adicionarItem("Maçã", 1.99, 5);

carrinho.adicionarItem("Pão", 0.99, 2);

console.log(carrinho.listarItems());

console.log(`Total: R$${carrinho.cacularTotal().toFixed(2)}`);

carrinho.removerItem("Pão");

console.log(carrinho.listarItems());