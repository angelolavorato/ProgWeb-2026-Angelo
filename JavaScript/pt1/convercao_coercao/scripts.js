console.log('****************CONVERSÃO************')
//exemplos de conversão de tipos
let valor = '123' //string
console.log(typeof valor)
console.log(typeof Number(valor)) //conversão de string pra number

let idade = 30
console.log(typeof idade) //number
console.log(typeof idade.toString()) //convertendo de number p/ string
console.log('****************COERÇÃO************')
//Ex. de coerção de tipos
console.log('5' + 10) //concatenação dos valores. foi utilizado "" para indicar que o resultado é uma string
console.log('5' - 10) //-5 é o resultado a partir da coerção de string para número
console.log('5' * 10) //50 é o resultado a partir da coeção de string para número
console.log('5' / 2) //2.5 é o resultado a partir da coeção de string para número
