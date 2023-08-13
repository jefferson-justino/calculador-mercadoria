
let gramas =document.getElementById('gramas')
let valor = document.getElementById('valor')
let botao = document.getElementById('botao')
let resultado=document.getElementById('resultado')

botao.addEventListener('click',function(){
let gramasval = gramas.value 
let val = valor.value

let calculo =  (gramasval/1000)*val

resultado.textContent = 'Total a pagar: R$'+calculo.toFixed(2)

})

