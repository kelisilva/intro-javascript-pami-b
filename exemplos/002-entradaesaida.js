// chamando a biblioteca que será utilizada//
let entrada = require ('prompt-sync')();
 
let nome = entrada ('digite seu nome:');
console.log ('nome digitado : '+ nome);

// Toda emtrada é um string// 

 let num ; //criação de variavel//  

 //entrada

num = entrada ('digite um numero : ')
let n1 = parseInt (num);
num = entrada (' digite outro numero;')
let n2 = parseInt (num); 
// processamento

let soma = n1 + n2 ;
// saida 

console.log('a soma do  nº'  + n1 + ' com o  nº '  + n2 + ' é : ' + soma);
 




entrada();
console.log ('fim do programa')