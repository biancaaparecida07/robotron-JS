//const roboton = document.querySelector("#roboton");
const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
console.log(estatisticas);
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
/*Uso de função anônima. Função anônima: uso apenas uma vez, executada quando o gatilho for disparado, que neste caso é o clique no botão.
Pode ser vista de duas formas: 
roboton.addEventListener("click",function(){console.log("Cliquei no robô!");});
OU
roboton.addEventListener("click",() => {console.log("Cliquei no robô!");});*/
//Funções conhecidas/declaradas são e podem ser usadas em várias pares do código. 

controle.forEach((elemento) =>{
    elemento.addEventListener("click",(evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode); //target: retorna onde o evento ocorreu. Qual foi o botão. ParentNode: é o elemento pai de onde foi clicado.
        atualizaestatisticas(evento.target.dataset.peca);
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

function atualizaestatisticas(peca){
    console.log(pecas[peca]);

    estatisticas.forEach((elemento) => {
        console.log(elemento.dataset.estatistica);
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    })}


