function collazCalc(){
    // função para calcular a conjectura de collaz || funcition to calc collaz conjecture

    // n = n / 2 -> para valores pares || for pair values
    // n = (3 * n) + 1 -> para valores ímpares || for odd values

    var n = document.getElementById("valEnter").value;      // recebendo valor do DOM || call value from DOM

    // condicional para verificar se o valor está dentro do intervalo
    // conditional to verify if the val is in the interval
    if(0 < n && n < 10^6) {

        var result = new Array;

        for(i = 0; i > -1 && n != 0; i++){                  // laço para calcular || loop to calc the equations

            if(n % 2 === 0) {                               // caso valor seja par || if to pair values

                n = n / 2;
                result[i] = n;

            } else {                                        // caso valor seja impar || else to odd values

                n = (3 * n) + 1;
                result[i] = n;

            }

            if(n === 1) {                                   // validação para finalizar o looping || validation to end loop
                i = -1;
                n = 0;
            }

        }
        
        document.getElementById("result").innerHTML = result;           // retorna os valores do array || return the entire array
        document.getElementById("itens").innerHTML = result.length;     // retorna o número de itens do array || return the number of itens inside the array

    } else {

        // exceção para valores fora do esperado || exception from non valid values
        alert("Por favor digite um número dentro do intervalo informado para calcular");

    }
}