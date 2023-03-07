let entrada = require ('prompt-sync')()

valor  = entrada ('Digite a 1º nota');
 let n1 = parseFloat(valor) ;

valor  = entrada ('Digite a 2º nota');
    let n2 = parseFloat (valor)

let media  = (n1 + n2)/2;
if (media == 5) {  
    nota= 'aluno recebe I ' ;
}
if (media >=5 && media <6.5 ){
    valor = 'aluno recebe R ' ;
}
if (media >=6.5 && media <8.5 ){
    valor = 'aluno recebe  B';
}
if (media >=8.5 ){
   valor='aluno recebe  MB';
}
console.log ( media = valor)