# Calculo
atividade 18/09
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercícios</title>
</head>
<body>
    <h1>Exercícios</h1>
    <h2>1008</h2>
    <button onclick="Executar1008()">Executar1008</button>
    <a href="https://judge.beecrowd.com/pt/problems/view/1008">click aqui</a>
    <h2>1009</h2>
    <button onclick="Executar1009()">Executar1009</button>
    <script  src="script.js"></script>
</body>
</html>
function Executar1008(){
    let id, horas, valorHora, salario
    //let horas 
    //let valorHora
    //let salario
    id =  Number(prompt("Digite seu id: "))
   // id = Number('45')
   // id = 45
   horas = Number(prompt("Quantas horas você trabalhou?"))
   valorHora = Number(prompt("Quantos você ganha por hora?"))

   salario = horas * valorHora
   alert("ID: " + "\nSalário: R$" + salario.toFixed(2))
}

function Executar1009(){
    let id , salarioFixo , totalVendas
    
}
