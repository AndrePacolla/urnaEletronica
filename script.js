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
  let etapa = etapas[etapaAtual];
  let candidato = etapa.candidatos.filter((item)=>{
    if(item.numero === numero) {
      return true
    }else{
      return false
    }
  });

  if(candidato.length > 0){ // se filtro retornar true , ou seja comprimento do candidato for maior que zero
    candidato = candidato[0]; // alem dessa variavel conter filter , ela agr esta contendo a posição 0 array
    seuVotoPara.style.display ='block';
    aviso.style.display = 'block';
    desc.innerHTML = `Nome :${candidato.nome} <br/>Partido: ${candidato.partido}`;

    let fotos = ''

    for(let i  in candidato.fotos){
      fotos += ` <div class="d-1-img"><img src="assets/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`
    }   

    lateralImg.innerHTML = fotos;
  }else{

    seuVotoPara.style.display ='block';
    aviso.style.display = 'block';
    desc.innerHTML = '<div class="aviso--grande">VOTO NULO</div>';

  }
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