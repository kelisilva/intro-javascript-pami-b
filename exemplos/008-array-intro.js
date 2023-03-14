let notas =[9, 8.5,7]
console.log(notas);
console.log(' 1ºnota:' + notas[0]);
console.log(' 2ºnota:'+  notas[1]);
console.log(' 3ºnota:' + notas[2]);

//editar posições do array
notas[0]= 'mb';
notas[1]= 'mb';
notas[2]= 'b';
console.log ('notas convertidas :');
console.log (notas [0]  + ' - ' + notas [1] + ' - ' + notas[2]);
 
let alunos = [
    {  nome : 'keli da silva',
    dt_nasc :13/05/1985,
    sexo :'f'

},
    { nome : 'keila da silva',
    dt_nasc :15/05/1987,
    sexo :'f' 
},

    { nome : 'Helen da silva',
    dt_nasc :13/09/1985,
    sexo :'f'
    },

    { nome : 'Elisa da silva',
    dt_nasc :13/05/1985,
    sexo :'f'
},
];
console.log ( ' 3º aluno') ;
console.log ( ' nome :' + alunos[2] . nome ) ;
console.log ( ' data de nascimento : ' + alunos [2] . dt_nasc) ;
console.log ('sexo : '+ alunos [2] .sexo);