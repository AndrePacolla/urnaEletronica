let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let desc = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateralImg = document.querySelector('.d-1-right'); 
let numeros = document.querySelector('.d-1-3');

// variavel de ambiente (global)

let numero = ''; 
let etapaAtual = 0;  





function comecarEtapa(){

    let etapa = etapas[etapaAtual];
   
    let divNumero = '';


    for(let i=0; i<etapa.numeros; i++){
      if(i === 0){
        divNumero += `<div class="numero pisca"></div>`
      }else{
        divNumero += `<div class="numero"></div>`
      }
    }


    seuVotoPara.style.display= 'none' 
    cargo.innerHTML = etapa.titulo;
    desc.innerHTML='';
    aviso.style.display = 'none'; 
    lateralImg.innerHTML = '';
    numeros.innerHTML = divNumero;
    
}

function atualizaInterface(){
  alert('finalizou de digitar o voto') 

}

function clicou(n){
    let piscaNumero = document.querySelector('.numero.pisca');

    if(piscaNumero !== null){ 
        piscaNumero.style.borderColor = 'red'
        piscaNumero.innerHTML = n 
        numero = `${numero}${n}` // 2 let  concatenado

      piscaNumero.classList.remove('pisca');
      if(piscaNumero.nextElementSibling !== null){
        piscaNumero.nextElementSibling.classList.add('pisca')
      }else{
        atualizaInterface();
      }
    }


}

function branco(){
}

function corrige(){

}

function confirma(){

}

comecarEtapa();