const roboton = document.querySelector("#roboton");

/*Uso de função anônima. Função anônima: uso apenas uma vez, executada quando o gatilho for disparado, que neste caso é o clique no botão.
Pode ser vista de duas formas: 
roboton.addEventListener("click",function(){console.log("Cliquei no robô!");});
OU
roboton.addEventListener("click",() => {console.log("Cliquei no robô!");});
*/

roboton.addEventListener("click",(evento) => {console.log(evento);});

//Funções conhecidas/declaradas são e podem ser usadas em várias pares do código. 
function dizoi(nome){
    console.log("Oi, "+nome);
    console.log("Bem vindo ao Robotron 2000");
}

dizoi("Bianca");