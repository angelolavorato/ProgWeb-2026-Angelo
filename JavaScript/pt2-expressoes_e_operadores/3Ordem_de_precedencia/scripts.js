//Exemplos
//Qual seria o resultado de da seguinte expressão: 2+3*4=?

console.log(2 + 3 * 4) //14
//O resultado é 14, pois a multiplicação tem precedência sobre a adição. Se quisermos que a adição seja realizada primeiro, podemos usar o parênteses()
console.log((2 + 3) * 4) //20

//Grouping operator (ordem de precedência)
//Operador de agrupamento é representado por parênteses e tem precedência mais alta do que todos os outros operadores como no exemplo anterior;

//Outros exemplos
//Suponhamos que eu queira calcular a média de 3 notas de um aluno: nota1 + nota2 + nota3 / 3
let average = 7 + 8 + 9 / 3
console.log(average) // o resultado é 18 (errado), pois pela ordem de precedência ele vai fazer a divisão primeiro

//Para corrigir isso, precisamos usar o operador de agrupamento para garantir que a soma das notas seja feita antes da divisão
average = (7 + 8 + 9) / 3
console.log(average)
