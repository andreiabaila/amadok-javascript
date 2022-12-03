var numero1 = 8
var numero2 = 8
var soma = numero1 + numero2


function parouimpar() {
    if(soma % 2 ===0) {
        return"O número é par"
    } else {
        return "o número é impar"
    }
}

var resultado= parouimpar()
console.log (resultado)