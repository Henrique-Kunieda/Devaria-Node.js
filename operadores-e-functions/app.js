const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const ValidarNumeroInformado = (numero) => {
     const resultado = Number.parseFloat(numero);
    
      if(!resultado){
        console.log('Número inforrmado não é válido')
    }
     return resultado;
}

const validarOperador = (operador) => {
    switch(operador){
        case '+':
        case '-' :
        case '/' : 
        case '*' :
        case '%':
            return operador;
        default :
         console.log (' Operador informado incorreto');
         return null; 
    }
}


readLine.question('Favor informar um número:', (numero1) =>  {
    const numeroValido1 = ValidarNumeroInformado(numero1);

    if(numeroValido1){
        readLine.question('Favor informar outrro número:', (numero2) => {
           const numeroValido2 = ValidarNumeroInformado(numero2);
          
           if(numeroValido2){
            readLine.question('Favor informar um operador:', (operador) => {
                const operadorValidado = validarOperador(operador);
                if(operadorValidado){
                    switch(operadorValidado){
                        case '+' : console.log(`operador selecionado adição  resultado  ${numeroValido1} + ${numeroValido2} = ${numeroValido1 + numeroValido2} `)
                          break;
                        case '-' : console.log(`operador selecionado subtração  resultado  ${numeroValido1} - ${numeroValido2} = ${numeroValido1 - numeroValido2}  `)
                         break;
                        case '*' : console.log(`operador selecionado multiplicação  resultado  ${numeroValido1} * ${numeroValido2} = ${numeroValido1 * numeroValido2}`)
                         break;
                        case '/' : console.log(`operador selecionado divisão  resultado  ${numeroValido1} / ${numeroValido2} = ${numeroValido1 /  numeroValido2}`)
                         break;
                        case '%' : console.log(`operador selecionado modúlo  resultado  ${numeroValido1} % ${numeroValido2} = ${numeroValido1 % numeroValido2}`)
                        break;
                       default : break;
                    }
                 }

             });
        }
   })
}
})

/*comit */

    

   

          
                
              
     

