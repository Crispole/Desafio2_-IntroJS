function cambioBorde() {
    const perro = document.querySelector('#perro')
    if(perro.style.borderColor !== 'red'){
        perro.style.border = '2px solid red'
    }
    else{
        perro.style.border = '0'
    }
    
}