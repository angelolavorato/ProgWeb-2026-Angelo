//=============================================================================
// OPERADORES ARITMÉTICOS EM JAVASCRIPT
//=============================================================================

console.log('=== OPERADORES ARITMÉTICOS EM JAVASCRIPT ===\n')

//DEFINIÇÃO:
// Operadores aritméticos são símbolos que realizam operações matemáticas
// básicas entre números. JavaScript possui os seguintes operadores:
//+ Adição / concatenação no JavaScript
//- Subtração
// /Divisão
// % Módulo (resto da divisão)
// * Multiplicação
// ** Exponenciação
// ++ Incremento
// -- Decremento
// Pré-incremento (++x): incrementa antes de usar o valor
// Pós-incremento (x++): incrementa após usar o valor
// O mesmo vale para decremento

//Exemplos
console.log('Soma: ', 2 + 2) //Isso é uma soma
console.log('Concatenação: ', '2' + '2') //Isso é uma concatenação, pois os números estão sendo tratados como string
console.log('Subtração: ', 10 - 5) //Isso é uma subtração
console.log('Multiplicação: ', 10 * 5) //Multiplicação
console.log('Divisão: ', 50 / 10) //Isso é uma divisão
console.log('Módulo', 10 % 3) //Módulo (resto da divisão)
console.log('Exponenciação:', 2 ** 3) //Exponenciação, o resultado é 2 elevado a 3

// Exemplos de Incremento e Decremento
// Incremento aumenta o valor da variável em 1
// Decremento diminui o valor da variável em 1


let x = 5;
console.log('Valor inicial de x:', x); // 5

console.log('Pré-incremento (++x):', ++x); // Incrementa x para 6 e retorna 6
console.log('Valor de x após pré-incremento:', x); // 6

x = 5; // Resetando x
console.log('Pós-incremento (x++):', x++); // Retorna 5 e depois incrementa x para 6
console.log('Valor de x após pós-incremento:', x); // 6

x = 5; // Resetando x
console.log('Pré-decremento (--x):', --x); // Decrementa x para 4 e retorna 4
console.log('Valor de x após pré-decremento:', x); // 4

x = 5; // Resetando x
console.log('Pós-decremento (x--):', x--); // Retorna 5 e depois decrementa x para 4
console.log('Valor de x após pós-decremento:', x); // 4


