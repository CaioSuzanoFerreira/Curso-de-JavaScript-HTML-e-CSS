function saudacaoPersonalizada(nome, mensagem)
    {
        return `${mensagem}, ${nome}`
    }

let saudacaoParaAlice = saudacaoPersonalizada("Alice", "Bom dia");

let saudacaoParaBob = saudacaoPersonalizada("Bob", "Bom noite");

console.log(saudacaoParaAlice);
console.log(saudacaoParaBob);

////////////////////////////////////////
function calcularDesconto(valorTotal, porcentagemDesconto)
    {
        let valorDesconto = (valorTotal * porcentagemDesconto) / 100;
        let valorFinal = valorTotal - valorDesconto;
        return valorFinal;
    }

let valorCompra1 = calcularDesconto(200, 10); 
let valorCompra2 = calcularDesconto(500, 15); 

console.log(valorCompra1);
console.log(valorCompra2);

///////////////////////////////////////////////////////

function formatarEndereco(rua, numero, bairro, cidade, estado)
    {
        return `Você mora na rua: ${rua} número: ${numero} no bairro: ${bairro} na cidade: ${cidade} no estado: ${estado}`;
    }

let endereco = formatarEndereco("Emboaçava", "346", "Mooca", "São Paulo", "São Paulo")

console.log(endereco)

///////////////////////////////////////////////////////

function converterHorasEmMinutos(horas)
    {
        let minutos = horas * 60;
        return minutos;
    }

let minutosHoras = converterHorasEmMinutos(3)

console.log(`3 horas equivalem à ${minutosHoras} minutos`);

/////////////////////////////////////////////////////

function anoBissexto(ano)
    {
        if (ano % 4 === 0 && ano % 100 !== 0|| ano % 400 === 0)
            {
                return `O ano ${ano} é bissexto`;
            }
        else
            {
                return `O ano não ${ano} não é bissexto`;
            }
    }

console.log(anoBissexto(2020));
