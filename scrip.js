let bancoDeDados = [];
function add() {
let usuario = document.getElementById("username").value;
let poss = bancoDeDados.indexOf(usuario.toUpperCase());
if (poss == -1){
bancoDeDados.push("Usuario cadastrado com sucesso!");
alert("Usuario cadastrado com sucesso!");
document.getElementById("username").value = null;
}
else
alert("Esse usuario já foi cadastrado!")


}
function login(){
 let usuario = document.getElementById("user").value;
let pos =
 if(pos == -1){
    alert("Usuário não encontrado!");
 }  
 else{
    alert("Bem vindo ao sistema!")
 } 
}
