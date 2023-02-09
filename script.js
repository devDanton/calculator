let vh = window.innerHeight * 0.01

document.documentElement.style.setProperty('--vh', `${vh}px`)

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
})
var expression = document.getElementById('expression')
var buttons = document.getElementsByTagName('input')
var resultH1 = document.getElementById('resultado')

for (var i = 0; i < buttons.length; i++) {
  if (buttons[i].type === 'button') {
    buttons[i].addEventListener('click', function () {
      if (this.value === '=') {
        resultH1.value = eval(expression.value)
      } else if (this.value === 'C') {
        expression.value = ''
        resultH1.value = ''
      } else {
        expression.value += this.value
      }
      console.log(this.value)
    })
  }
}
