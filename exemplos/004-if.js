let entrada = require ('prompt-sync')();

let idade = entrada ('Digite sua idade');

if (idade == 18) {  
    console.log ('voce tem idade para ter carteira de habilitação ') ;
} 

if (idade>18 ){
    console.log ('Voce ja poderia estar dirigindo se tivesse habilitação');
}

if (idade <18 ){
    console.log('voce só anda de carona');
}

//outro modo
if (idade > 18 ) {
     console .log('voce ja poderia estar dirigindo se tivesse habilitação');

}
 else if(idade <18) {
    console.log ('voce só anda de carona');
 }else{ 
    console.log( 'voce tem idade para a habilitação')
 }


