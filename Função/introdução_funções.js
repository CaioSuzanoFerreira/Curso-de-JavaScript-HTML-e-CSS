function soma(a, b)
    {
        return a + b;
    }
    
let resultado = soma(50, 3);

console.log(resultado);

//////////////////////////////

function verficarParImpar(numero) 
    {
        if (numero % 2 === 0)
            {
                return "Par";
            }
        else
            {
                return "Impar";
            }
    }

let resultado1 = verficarParImpar();

console.log(resultado1);

////////////////////////////////////////

function saudar(nome) 
    {
        return "Olá, " + nome + "! Seja bem-vindo(a)";
    }

let mensagem = saudar("Caio");

console.log(mensagem);


