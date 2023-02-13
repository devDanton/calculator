let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
})

function insert(num) {
  var numero = document.getElementById("resultado").innerHTML
  document.getElementById("resultado").innerHTML = numero + num
}
function clean() {
  document.getElementById("resultado").innerHTML = ""
}

function percent() {
  let expressao = document.getElementById("resultado").innerHTML
  var values = expressao.split(/[\+\-\*\/\%\(\)]/)
  var firstValue = parseFloat(values[0])
  var secondValue = parseFloat(values[1])
  var operator = expressao.match(/[\+\-\*\/\%\(\)]/)

  let percentual = eval(firstValue * secondValue / 100)

  let resultado

  if (operator == "+") {
    resultado = firstValue + percentual;
  } else if (operator == "-") {
    resultado = firstValue - percentual;
  } else if (operator == "*") {
    resultado = firstValue * percentual;
  } else if (operator == "/") {
    resultado = firstValue / percentual;
  } else {
    resultado = "Operação inválida";
  }

  console.log("Primeiro valor: " + firstValue)
  console.log("Segundo valor: " + secondValue)
  console.log("operador: " + operator)
  console.log("percentual: " + percentual)
  console.log("Resultado: " + resultado)

  document.getElementById("resultado").innerHTML = resultado
}


function back() {
  var resultado = document.getElementById("resultado").innerHTML
  document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length - 1)
}

function calc() {
  var resultado = document.getElementById("resultado").innerHTML
  resultado ? document.getElementById("resultado").innerHTML = eval(resultado) : resultado
}