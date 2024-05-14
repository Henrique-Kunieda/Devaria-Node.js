const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Esse programa vai checar se você é maior de 18 anos e tem carteira de habilitação')
console.log('Além das verificações, vamos verificar se você está no horário da atividade escolhida')

readLine.question('Qual sua data de nascimento?', ano => {
        if(ano > 2004){
            console.log(' Você não tem 18 anos')
        } else{
             readLine.question('Você tem habilitação? (Sim/Não):', temHabilitacao => {
                if(!(temHabilitacao.toUpperCase() === 'SIM')){
                      console.log('Você não tem habilitação')
                }else {
                    readLine.question('Qual seu nome?', nome => {
                        switch(nome){
                            case 'Douglas' :
                                console.log('Bem vindo a atividade Douglas');
                                break;
                         case 'Henrique':
                             console.log('Bem vindo a segunda atividade Henrique');
                             break;
                         default:
                            console.log('Usuário não emcontrado...')
                            

                        }
                    })
               }
         })
   }

})
    
