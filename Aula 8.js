// valores= [1,2,3,4,5];
// for (i=0; i < valores.length ; i++ )
// {
//     console.log(valores[i]);
// }

//  valores= [1,2,3,5,8,13,21,23,34,55];
//  soma=0;
// for (i=0; i < valores.length ; i++ )
// {
//    soma=soma+valores[i];
// }
// media=soma/valores.length;
// console.log(media);


meuNome="Lucas";

nomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", 
"Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia", 
"Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", 
"Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", 
"Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", 
"Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"]
i=0;
nomeComum=true;
while(i<nomesComuns.length){
    if(meuNome==nomesComuns[i]){
        console.log(meuNome+" é nome comum :P");
        nomeComum=false;
        break;
        
    }
    else{
    i++}
}
if (nomeComum){
    console.log(meuNome+" não é nome comum. Diferentão, hein? XD");
}