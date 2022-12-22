function salvar() {
 
  let DiaDeTrabalho = document.getElementById('dia-de-trabalho').value
  let DiaDeTrabalhoPadrãoConvertido = DiaDeTrabalho.split('-').reverse().join('/')
  let QuantidadeDeCaptaçao = document.getElementById('captaçao').value
  let QuantidadeDeEntrevista = document.getElementById('entrevistas').value
  let ElementosDaTabela = document.getElementById('DadosDaTabela')
  /*console.log(DiaDeTrabalho,DiaDeTrabalhoPadrãoConvertido, QuantidadeDeCaptaçao, QuantidadeDeEntrevista)*/


  let Tabela = {
    DiaDeTrabalhoPadrãoConvertido: DiaDeTrabalhoPadrãoConvertido,
    QuantidadeDeCaptaçao: QuantidadeDeCaptaçao,
    QuantidadeDeEntrevista:QuantidadeDeEntrevista
  }

  arrayTabela.push(Tabela)

  ElementosDaTabela.innerHTML = ''

  arrayTabela.forEach((value, index) => { 
    ElementosDaTabela.innerHTML += `
  <tr class="result">
  <td> ${value.DiaDeTrabalhoPadrãoConvertido}</td>
  <td> ${value.QuantidadeDeCaptaçao}</td>
  <td> ${value.QuantidadeDeEntrevista}</td>
  </tr>
 `
  })
}
let arrayTabela = []


