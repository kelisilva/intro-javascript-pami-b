let alunos = [
    {  nome : 'keli da silva',
    dt_nasc :13/05/1985,
    sexo :'f'

},
    { nome : 'keila da silva',
    dt_nasc :'15/05/1987',
    sexo :'f' 
},

    { nome : 'Helen da silva',
    dt_nasc :'13/09/1985',
    sexo :'f'
    },

    { nome : 'Elisa da silva',
    dt_nasc :'13/05/1985',
    sexo :'f'
},

];
for (let cont =0 ; cont < alunos.length ;cont ++) {
console.log  ((cont +1)  +  ' ºaluno')
console.log (' nome :' + alunos[cont].nome ) ;
console.log (' data de nascimento : ' + alunos [cont].dt_nasc) ;
console.log ('sexo : '+ alunos [cont].sexo); 
console.log('------------');
}
// ou fazer como abaixo 
for (var cont in alunos){
    console.log (parseint(cont) +1 + ' º aluno : ');
console.log  ((cont +1)  +  ' ºaluno')
console.log (' nome :' + alunos[cont].nome ) ;
console.log (' data de nascimento : ' + alunos [cont].dt_nasc) ;
console.log ('sexo : '+ alunos [cont].sexo); 
console.log('------------');
}