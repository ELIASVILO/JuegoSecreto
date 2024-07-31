function calcularMedia(lista){
    let suma=0;
    for (let i=0; i<lista.length; i++){
        suma+= lista[i];

    }

return suma/lista.length;
}

let numerosLista = [10,20,40,40,50];
let media= calcularMedia(numerosLista);
console.log(media);




/*
let lenguajesDeProgramacion= ["java", "kotlin"];
console.log (lenguajesDeProgramacion.length);

lenguajesDeProgramacion.push("ruby", "golang");
console.log (lenguajesDeProgramacion.length);


function listaDeLenguajes (){
    for( let i=0; i<lenguajesDeProgramacion.length; i++){
        console.log(lenguajesDeProgramacion[i]);
    }

}

//listaDeLenguajes();

function ordenInverso(){
    for( let i=lenguajesDeProgramacion.length -1;i>=0; i--){
        console.log(lenguajesDeProgramacion[i]);
    }
}
ordenInverso();




let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
function mostrarLenguagesSeparadamente() {
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
      console.log(lenguagesDeProgramacion[i]);
    }
  }
  
  mostrarLenguagesSeparadamente();/*









let lenguajesDeProgramacion= ["java", "kotlin"];
console.log (lenguajesDeProgramacion.length);
console.log(lenguajesDeProgramacion.length-1);

lenguajesDeProgramacion.push("ruby", "golang");
console.log (lenguajesDeProgramacion.length);

function listaDeLenguajes (){
    for( let i=0; i>lenguajesDeProgramacion.length; i++){
        console.log(lenguajesDeProgramacion[i]);
    }

}
listaDeLenguajes();



function multiplo(numero){
    return numero*numero
}
let operacion= multiplo (10);
alert(operacion);



function calcularMayor (a , b){
    return a>b ? a:b;
    
}
let promedio= calcularMayor(8,9);
alert(promedio);




function calularDoble (numero) {
    return numero*2;
      
}

let resultado= calularDoble(4);
alert(resultado);


let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML= texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt( document.getElementById ('valorUsuario').value);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroDeUsuario);
    console.log(typeof(numeroSecreto));
    console.log (numeroSecreto);
    console.log (numeroDeUsuari === numeroSecreto);
    return;
}

function generarNumeroSecreto() {
    return Math.floor (Math.random()*10)+1;
}

asignarTextoElemento('h1','Juego del numero secreto');
asignarTextoElemento('p','Indica un número del 1 al 10');
*/