//const roboton = document.querySelector("#roboton");
const controle = document.querySelectorAll("[data-controle]");

/*Uso de função anônima. Função anônima: uso apenas uma vez, executada quando o gatilho for disparado, que neste caso é o clique no botão.
Pode ser vista de duas formas: 
roboton.addEventListener("click",function(){console.log("Cliquei no robô!");});
OU
roboton.addEventListener("click",() => {console.log("Cliquei no robô!");});*/
//Funções conhecidas/declaradas são e podem ser usadas em várias pares do código. 

controle.forEach((elemento) =>{
    elemento.addEventListener("click",(evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode); //target: retorna onde o evento ocorreu. Qual foi o botão. ParentNode: é o elemento pai de onde foi clicado.
    });
});

function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]");
    if (operacao==="-"){
        peca.value = (parseInt(peca.value))-1;
    } else if (operacao==="+"){
        peca.value = (parseInt(peca.value))+1;
    }
}
