const solucion = document.querySelector(".resultado");
const btn = document.querySelector(".verificar");

btn.addEventListener('click', () => {
    const num1 = document.querySelector("#num1").value;
    const num2 = document.querySelector("#num2").value;
    const num3 = document.querySelector("#num3").value;
    const password = num1 + num2 + num3;
    
if (password === '911') {
    solucion.innerHTML = "Clave 1 Correcta";
} 
else if (password === '714') {  
    solucion.innerHTML = "Clave 2 Correcta";
} 
else {
    solucion.innerHTML = "Clave Incorrecta";
}
});

