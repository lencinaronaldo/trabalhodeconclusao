//imprime na tela a instrucao que recebe
function imprimir(x) {
    console.log(x);
}


//verifica se 2 nomes sao iguais e retorna verdadeiro ou falso
function mesmoNome(n1, n2) {
    return n1 == n2;
}



//verifica se a idade e de um adulto
function maiorDeIdade(idade) {
    return idade >= 18;
}



//calcula valor de boleto acrecido de 10% de juros
function valorComJuros(valor) {
    return valor * 1.1;
}



//recebe valore de um array e calcula media aritmetica
function mediaAritmetica(valores){
soma=0;
for (i=0; i < valores.length ; i++ )
{
soma=soma+valores[i];
}
return soma/valores.length;
}

//calcula a margem bruta de uma empresa
function margemBruta(receita,custo){
    return ((receita-custo)/receita)*100;
}




cwi = "CWI"
reset = "Reset"
imprimir(mesmoNome(cwi, cwi))   // true
imprimir(mesmoNome(cwi, reset)) // false

imprimir("---")

imprimir(maiorDeIdade(30)) // true
imprimir(maiorDeIdade(18)) // true
imprimir(maiorDeIdade(5))  // false

imprimir("---")

imprimir(valorComJuros(100))   // 110
imprimir(valorComJuros(984.5)) // 1082.95

imprimir("---")

imprimir(mediaAritmetica([1]))             // 1
imprimir(mediaAritmetica([1, 4, 10]))      // 5
imprimir(mediaAritmetica([1, 2, 3, 4, 5])) // 3

imprimir("---")

imprimir(margemBruta(1000000, 500000))      // 50
imprimir(margemBruta(528459.11, 632501.87)) // -19.68