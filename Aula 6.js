peso=97.0;
altura=1.8;
imc=peso/(altura**2);
classificacao="";
grauDeObesidade=0;
if (imc<18.5)
{
    classificacao="Magreza";
}
else if (imc<25)
{
    classificacao="Normal";
}
else if (imc<30)
{
    classificacao="Sobrepeso";
    grauDeObesidade=1;
}
else if (imc<40)
{
    classificacao="Obesidade";
    grauDeObesidade=2;
}
else
{
    classificacao="Obesidade Grave";
    grauDeObesidade=3;
}
console.log("Seu IMC é "+imc);
console.log("Classificação segundo OMS de "+ classificacao);
console.log("Grau de obesidade "+ grauDeObesidade);
if (grauDeObesidade>0)
{
    console.log("Cuidado! Você está acima do peso recondado pela OMS");

}
if (grauDeObesidade==3)
{
    console.log("É importante procurar um médico");
}