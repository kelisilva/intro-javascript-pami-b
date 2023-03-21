const entrada = require ('prompt-sync')();

function soma ( numeros = [0]){
    let resulatdo = 0 ;
    for (let i in numeros){
        resultado +=numeros [i] ;
    } 
 return resultado;

}
let listaNum = [];
let num = 0;
do {
     num= entrada ('digite um numero para somar ou 0 para encerrar:');
    if ( num === '0') {
         break ;

    }
     listaNum.push (parseInt(num));
    while (num!== "0");

    const total = soma (listaNum);
console.log ('total da soma:'+ total);
}