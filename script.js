let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let desc = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateralImg = document.querySelector('.d-1-right'); 
let numeros = document.querySelector('.d-1-3');

// variavel de ambiente (global)

let numero = ''; 
let etapaAtual = 0;  
let btnBranco = false;


function comecarEtapa(){
    let etapa = etapas[etapaAtual];
   
    numero = '';
    btnBranco = false;

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

  if(candidato.length > 0){ 
    candidato = candidato[0]; // filter retornou novo array , preciso ESPECIFICAR esse novo array !
    seuVotoPara.style.display ='block';
    aviso.style.display = 'block';
    desc.innerHTML = `Nome :${candidato.nome} <br/>Partido: ${candidato.partido}`;

    let fotos = '';

    for(let i in candidato.fotos){
      if(candidato.fotos[i].small){
        fotos += ` <div class="d-1-img small"><img src="assets/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`
      }else{
        fotos += ` <div class="d-1-img"><img src="assets/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`
      }
     
    }  

    lateralImg.innerHTML = fotos;
  }else{//voto NULO
    seuVotoPara.style.display ='block';
    aviso.style.display = 'block';
    desc.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>';
  }
}

function clicou(n){
    let piscaNumero = document.querySelector('.numero.pisca');

    if(piscaNumero !== null){ 
        piscaNumero.style.borderColor = 'red'
        piscaNumero.innerHTML = n 
        numero = `${numero}${n}` 

      piscaNumero.classList.remove('pisca');
      if(piscaNumero.nextElementSibling !== null){
        piscaNumero.nextElementSibling.classList.add('pisca')
      }else{
        atualizaInterface();
      }
    }
}
function branco(){

  if(numero === ''){
    btnBranco = true;

    seuVotoPara.style.display ='block';
    aviso.style.display = 'block';
    numeros.innerHTML = '';
    desc.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO </div>'
  }else{
    alert('Para votar em Branco, não é permitido preenchimento de número(s)')
  }
};

function corrige(){
  comecarEtapa();
};

function confirma(){

  let etapa = etapas[etapaAtual];
  let votoConfirmado = false;

  // duas verificaçoes tanto no voto em branco quanto no voto preenchido !

  if(btnBranco === true){ // si 
    votoConfirmado = true;
  }else if(numero.length === etapa.numeros){ // ou se 
    votoConfirmado = true;
  };


  if(votoConfirmado){
    etapaAtual++;  // incrementando 
    if(etapas[etapaAtual] !== undefined){
      comecarEtapa();
    }else{
      cargo.innerHTML = '';
      seuVotoPara.style.display= 'none'; 
      numeros.innerHTML = '';
      lateralImg.innerHTML = '';
      desc.innerHTML = '<div class="aviso--extraGrande pisca"> FIM </div>'; 
    }
  };
};

comecarEtapa();