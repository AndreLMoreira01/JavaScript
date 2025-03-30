//1) Exibir Olá Mundo:
//Crie um programa que exiba "hello world!!" no console

var teste = 'hello world!'
console.log(teste);

//2) Operações Matemáticas Básicas:
//Solicite ao usuário dois números e exiba a soma, subtração, multiplicação e divisão desses números
let num1 = 10
let num2 = 20
let soma

soma = num1 + num2

console.log(soma);

//3)Verificando Par ou Ímpar:
//Crie uma função que verifique se um número fornecido pelo usuário é par ou ímpar.

function verificarPar(numero){
 if(numero % 2 == 0){
     console.log(numero + ' é um numero par')
}
else{
    console.log(numero + ' é um numero impar')
}
}
verificarPar(10);

//4)Crie um programa que receba a idade de uma pessoa e verifique se ela é maior de idade (18 anos ou mais).
function verificarIdade(idade){
    if (idade >= 18){
        console.log('A idade é maior ou igual a 18 anos')
    }
    else {
        console.log('A idade é menor que 18 anos')
    }
}
verificarIdade(20);
verificarIdade(17);

//5)Calculadora de Área de um Retângulo
//Crie uma função que receba a largura e a altura de um retângulo e calcule a área.
function areaRetangulo(altura, largura) {
    let area = altura * largura;
    console.log("A área do retângulo é: " + area);
}
areaRetangulo(20, 10);

//6)Contagem Regressiva
//Crie uma função que conte de 10 até 1 no console.
function contagemRegressiva(){
    for (let i = 1; i <= 10; i++){
        console.log(i);
    }    
}
contagemRegressiva();


//7)Maior Número
//Crie uma função que receba três números e retorne o maior número.
function maiorNumero(a, b, c) {
    if (a >= b && a >= c) {
        return a; // 'a' é o maior
    } else if (b >= a && b >= c) {
        return b; // 'b' é o maior
    } else {
        return c; // 'c' é o maior
    }
}

console.log(maiorNumero(5, 10, 3));

//8) Exibir uma mensagem personalizada:
//Crie uma função que receba o nome de uma pessoa e exiba a mensagem "Olá, [nome]!"
function receberNome(nome){
    console.log('Ola' + nome);
}
receberNome(' Andre;');

//9) Verificar se um número é positivo ou negativo:
//Crie uma função que receba um número e verifique se ele é positivo, negativo ou zero.
function verificarNumero(numero){
    if(numero >= 0){
        console.log('O numero é positivo ' + numero);
    }
    else{
        if(numero < 0){
            console.log('O numero é negativo ' + numero);
        }
    }
}
verificarNumero(-1);
//10) Converter Temperatura de Celsius para Fahrenheit:
//Crie uma função que converta uma temperatura em Celsius para Fahrenheit.
function converterFahrenheit(celcius){
    fahrenheit = (celcius * 9/5) + 32;
    console.log(celcius + ' em Fahrenheit são ' + fahrenheit)
}
converterFahrenheit(10);

//11) Verificar Ano Bissexto:
//Crie uma função que verifique se um ano fornecido pelo usuário é bissexto.
function anoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        console.log('O ano é bissexto!');
    } else {
        console.log('O ano não é bissexto!');
    }
}

// Testando a função
anoBissexto(2020); // O ano é bissexto!
anoBissexto(2021); // O ano não é bissexto!


//12) Contar até um número especificado:
//Crie uma função que conte de 1 até o número fornecido pelo usuário.
function contadorNumeros(numero){
    for (let i = 1; i <= numero; i++){
        console.log(i);
    }
}
contadorNumeros(4);//Exemplo contando até o número 4

//13) Calcular o Fatorial de um Número:
//Crie uma função que calcule o fatorial de um número.
function calcularFatorial(numero){
    let fatorial = 1;
    for (let i = 1; i <= numero; i++){
        fatorial *= i;
    }
    console.log('O fatorial do número é igual a ' + fatorial);
}
calcularFatorial(5);


//14) Inverter uma String:
//Crie uma função que inverta uma string fornecida pelo usuário.
function inverterStrint(string){
    return string.split('').reverse().join('');
}

console.log(inverterStrint("Hello, world!"));
console.log(inverterStrint("Oie"));

//split('') → Divide a string em um array de caracteres.
//reverse() → Inverte a ordem dos elementos do array.
//join('') → Junta os elementos do array de volta em uma string.

//15) Contar Quantas Vezes uma Letra Aparece:
//Crie uma função que conte quantas vezes uma letra aparece em uma palavra fornecida pelo usuário.
function contarLetra(string, caracter){
    return string.split(caracter).length -1;
}
console.log(contarLetra("banana", "a"));

//Precisamos dos parâmetros string e caracter porque queremos contar um caractere específico dentro de um texto.
//Usamos split(caracter) para quebrar a string e contar quantas partes ela foi dividida.
//Fazemos length - 1 porque o número de ocorrências do caractere será sempre um a menos que o tamanho do array gerado.
//Exemplo: "banana".split("a");"
//          ["b", "n", "n", ""]


//16) Criar uma Sequência de Fibonacci:
//Crie uma função que exiba os primeiros N números da sequência de Fibonacci.
function exibirFibonacci(n) {
    let fibonacci = [0, 1];

    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    return fibonacci.slice(0, n); // Retorna apenas os N primeiros números
}

// Exemplo de uso:
console.log(exibirFibonacci(10)); 
// Saída: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
