/*5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser 
previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;*/

function inverterString(str) {
    var stringInvertida = '';
    for (var i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    return stringInvertida;
}
console.log(inverterString("Teste Target Sistemas"));