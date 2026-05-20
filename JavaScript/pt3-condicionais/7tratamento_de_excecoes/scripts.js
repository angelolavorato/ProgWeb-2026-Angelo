//Exemplos práticos de tratamento de excções
/*try {
  //TENTA executar algo
  console.log(result)
} catch (error) {
  //CAPTURA o erro para tratar
  console.log('Ops algo deu errado', error)
} finally {
  console.log('FIM')
}*/

//Lançando uma execução personalizada
let resultado = 0
try {
  if (resultado === 0) {
    throw new Error('O resultado não pode ser zero!')
  }
} catch (error) {
  console.log(error)
} finally {
  console.log('FIM')
}
