//Passando o parâmetro para a função
function mensagem(username) {
  console.log('Olá ' + username + '!')
}

//Passando argumentos para a função
mensagem('Maria')
mensagem('Joao')

//outro exemplo
function sum(a, b) {
  console.log(a + b)
}

sum(5, 10) //15
sum(6, 4) //10

//na função acima, a e b são os parâmetros e 5 e 10, 6 e 4 são os argumentos.

//Obs não podemos esquecer que os argumentos devem ser passados na mesma ordem dos parâmetros, caso contrário, a função pode não funcionar como o esperado. Pois a ordem dos parâmetros é importante para a função entender quais valores estão sendo passados. Por exemplo:

function joinText(text1, text2, text3) {
  console.log(text1 + ' ' + text2 + ' ' + text3)
}

joinText('copo', 'pedra', 'garrafa') //Saída: copo, pedra, garrafa.
joinText('pedra', 'garrafa', 'copo')//Saída: pedra, garrafa, copo

//No exemplo acima, a ordem dos argumentos é importante para que a função possa juntar os textos corretamente. Se a ordem dos argumentos for alterada, o resultado final será diferente.
