let entrada = require ('prompt-sync') ();
 
//função com parâmetro sem, retorno

function data () {
    const timeElapsed = Date.now () ;
    const hoje = new Date (timeElapsed);
console.log ('hoje é'+  hoje.toUTCString());
}

//funçao sem parâmetro e com retorno
function caracterAleatorio () {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const nAleatorio = Math.floor (Math.random ()* (61-0)+ 0);
    const caracter= characters.charAt (nAleatorio);
   return caracter ; 
}

// função com parametro sem retorno
function olaNome(nome){
    console.log ('ola'+ nome);
}

// função com parãmetro com retorno
function soma (n1,n2) {
    return n1 + n2 ;
} 

data ();
 


console.log(caracterAleatorio());

// chamada  função com parametro sem retorno 
olaNome('Keli');

const resultado = soma (1,2);
console.log (resultado);

