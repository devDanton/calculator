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
  var numero = document.getElementById("resultado").innerHTML
  document.getElementById("resultado").innerHTML = numero * num / 100
}

function back() {
  var resultado = document.getElementById("resultado").innerHTML
  document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length - 1)
}

function calc() {
  var resultado = document.getElementById("resultado").innerHTML
  resultado ? document.getElementById("resultado").innerHTML = eval(resultado) : resultado
}