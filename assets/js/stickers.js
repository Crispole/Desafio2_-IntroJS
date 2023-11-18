const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
const n3 = document.querySelector("#n3");
const btn = document.querySelector("button");
const parrafo = document.querySelector("#par");


btn.addEventListener("click", () => {

const suma = Number(n1.value) + Number(n2.value) + Number(n3.value)
if (suma < 10) {
    parrafo.innerHTML = 'Llevas ' + suma + ' stickers'
    console.log('si puedes');
}

else {
    parrafo.innerHTML = 'Llevas demasiados stickers'
    console.log('no puedes')
}

});
