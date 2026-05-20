//Exemplos usando string
let nome = 'Jao'
console.log(nome) //Jao
console.log(nome.length) //3
console.log(typeof nome) //string
console.log(nome.toUpperCase()) //JAO - deixa tudo maiusculo
console.log(nome.toLowerCase()) //jao - deixa tudo minusculo

console.log('Uma string com aspas simples') //Uma string com aspas simples. O auto corretor corrige para aspas simples, mas o correto seria usar aspas duplas para não ter a barra invertida.
console.log('Uma string com aspas duplas') //Uma string com aspas duplas

//Se eu quiser usar aspas simples dentro de uma string, eu posso usar aspas duplas para delimitar a string.
console.log("Uma string com aspas simples 'dentro' dela") //Uma string com aspas simples 'dentro' dela

//Como escrever utilizando tabulação, quebra de linha e outros caracteres especiais? e intepolação de variáveis?
console.log(`usar crase 
  para criar strings com quebra de linha
  E usar 
  
  interpolação de 
  variáveis como ${nome}`) //usar crase

//como imprimir uma string com outra
console.log('O nome é ' + nome) //O nome é Jao - concatenando strings
console.log('O nome é', nome) //O nome é  Jao - usando vírgula para concatenar strings, mas isso não é recomendado porque pode causar problemas de formatação em alguns casos.
console.log(`O nome é ${nome}`) //O nome é Jao - usando template literals para interpolação de variáveis
