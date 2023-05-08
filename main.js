//const roboton = document.querySelector("#roboton");
const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

const controle = document.querySelectorAll(".controle-ajuste");

/*Uso de função anônima. Função anônima: uso apenas uma vez, executada quando o gatilho for disparado, que neste caso é o clique no botão.
Pode ser vista de duas formas: 
roboton.addEventListener("click",function(){console.log("Cliquei no robô!");});
OU
roboton.addEventListener("click",() => {console.log("Cliquei no robô!");});

//Funções conhecidas/declaradas são e podem ser usadas em várias pares do código. 
*/
controle.forEach((elemento) =>{
    elemento.addEventListener("click",(evento) => {
        manipulaDados(evento.target.textContent); //target: retorna onde o evento ocorreu. Qual foi o botão. 
    });
});

function manipulaDados(operacao){
    if (operacao==="-"){
        braco.value = (parseInt(braco.value))-1;
    } else if (operacao==="+"){
        braco.value = (parseInt(braco.value))+1;
    }
}
