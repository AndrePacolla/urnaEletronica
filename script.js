let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let desc = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateralImg = document.querySelector('.d-1-right'); 
let numeros = document.querySelector('.d-1-3');


let etapaAtual = 0;  // incio do array
let numero = ''; // ta pegando numero do teclado 





function comecarEtapa(){
    // 1 limpar tela
    // 2 pegar informaçoes atuais do meu array posicao 0
    // 3 preencher essas informaçoes na tela

    let etapa = etapas[etapaAtual] //  etapa recebe dados do array posição zero (vereador)

    let numeroHtml = '' //  variavel fora para ser utilizada globalmente ,vou preencher com os loops

    for(let i=0; i< etapa.numeros; i++){
        if(i === 0 ){
            numeroHtml += `<div class="numero pisca"></div>`

        }else{
            numeroHtml += `<div class="numero"></div>`
        }
    }

    seuVotoPara.style.display= 'none' // estou atigindo o span diretamente
    cargo.innerHTML = etapa.titulo;
    desc.innerHTML='';
    aviso.style.display = 'none'; 
    lateralImg.innerHTML = '';
    numeros.innerHTML = numeroHtml;
    
}

function atualizaInterface(){

}

function clicou(n){
    let piscaNumero = document.querySelector('.numero.pisca');

    if(piscaNumero !== null){ // se tem class pisca
        piscaNumero.style.borderColor = 'red'
        
        piscaNumero.innerHTML = n 
        numero = `${numero}${n}` 
    }


}

function branco(){
}

function corrige(){

}

function confirma(){

}

comecarEtapa();