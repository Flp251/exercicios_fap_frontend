
var fruta = "";
var caractere;
var numero = 0;
var saida = "";

fruta = prompt ("qual a fruta escolhida? ");
caractere = prompt ("caractere ");
numero = prompt ("quantas repetições sera desejada? ");



for (var i = 1; i <= numero; i++){
   var aux = fruta + caractere;
    saida = saida + aux;
}

console.log ("resultado:\n" + saida)


