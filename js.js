let cima = 'paraCima';
let baixo = 'paraBaixo';

function girar() {
    let icone = document.querySelector('.fa-puzzle-piece');
  
    if(~icone.className.indexOf(baixo)) {
        icone.className = icone.className.replace(baixo, cima);
    } 
    
    else {
        icone.className = icone.className.replace(cima, baixo);
    }
}