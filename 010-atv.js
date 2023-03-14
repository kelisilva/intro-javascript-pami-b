let entrada = require('prompt-sync')(); 

let tarefas = [
    {
        id: 1, 
        tarefa: 'Estudar js', 
        realizada: false
    }, 
    {
        id: 2, 
        tarefa: 'Estudar BD', 
        realizada: false
    }, 
    {
        id: 3, 
        tarefa: 'Dormir', 
        realizada: true
    }
];

let opcao = 0;

do {
    
    console.log('LISTA DE TAREFAS');
    console.log('1 - Listar tarefas pendentes');
    console.log('2 - Listar tarefas realizadas');
    console.log('3 - Adicionar tarefa'); 
    console.log('4 - Concluir tarefa');
    console.log('5 - Excluir tarefa');
    console.log('0 - Encerrar');
    opcao = entrada('Selecione uma opção:');

    if (opcao == 1) 
        
    console.log ('--------------')
        console.log('listando tarefas não  realizadas')

         
    

       for (let cont in tarefas){
        if (tarefas[cont]. realizada == false)

            console.log ('id :' + tarefas[cont].id) ;
            console.log ('  tarefa ' + alunos [cont].tarefa) ;
            console.log ('realizada : '+ alunos [cont].realizada); 
            console.log('------------');

    }

    if (opcao == 2) {
        console.log ('--------------')
        console.log('listando tarefas realizadasa')
        for (let cont in tarefas){
            if (tarefas[cont]. realizada == true)

            console.log ('id :' + tarefas[cont].id) ;
            console.log ('  tarefa ' + alunos [cont].tarefa) ;
            console.log ('realizada : '+ alunos [cont].realizada); 
            console.log('------------');}
    }

    

    if (opcao == 3) {
        console.log ('adicionar tarefa')
        let tarefa = entrada = entrada ();
        const id = tarefas.lenth + 1 ;
        tarefas . push ({
            id : id, 
            tarefa : tarefa ,
            realizada : false


        })

        
    }

    if (opcao == 4) {
       
        console.log('Concluir tarefa')
        for (let cont in tarefas){
            if (tarefas[cont]. realizada == false)

            console.log ( tarefas[cont].id +  '-'+ tarefas [cont].tarefa) ;
            const concluida = entrada (' insira o id da tarefa a ser concluida:')
            const editar = concluida - 1 ;
            const txttarefaEdit = tarefas[editar].tarefa ;
            tarefas [editar] = {
                id : editar ,
                tarefa : txttarefaEdit,
                realizada :true
            }

           
           
    }

    if (opcao == 5) {
     console.log ('excluir tarefa')  ;
     for (let cont in tarefas) {
         if ( tarefas [cont].realizada ==true)

     }

    }

} while (opcao != 0); 
for (var cont in tarefas){
    



console.log('Programa encerrado!');
entrada();