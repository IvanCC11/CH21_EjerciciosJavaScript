// Solicitar 3 números (entre el 1 y el 100) y definir cual es el mayor
// Solicitar 3 números (entre el 1 y el 100) y definir el menor de tres números
function numMayor(array){
    let numeroMayor = 0;
    for (let i=0; i<array.length;i++){
        if(array[i]>numeroMayor)
        numeroMayor=arreglo[i];
    }
    return numeroMayor;
}

function numMenor (array){
    let numMenor = Number.MAX_VALUE
    for (let i=0;i<array.length;i++){
        if (array[i]<numMenor)
        numMenor=array[i];
    }
    return numMenor;
}

let btnMayor = document.getElementById("btnMayor");
btnMayor.addEventListener("click",function(event){
    event.preventDefault();
    let n1 = parseInt(document.getElementById("inputNum1").value);
    let n2 = parseInt(document.getElementById("inputNum2").value);
    let n3 = parseInt(document.getElementById("inputNum3"));
    let arreglo1 =[n1,n2,n3];
    let resultado = document.getElementById("alertResultado1");
})

    let btnMenor = document.getElementById("btnMenor");
    btnMenor.addEventListener("click",function(event){
        event.preventDefault();
    let n1 = parseInt(document.getElementById("inputNum1").value);
    let n2 = parseInt(document.getElementById("inputNum2").value);
    let n3 = parseInt(document.getElementById("inputNum3"));
    let arreglo1 =[n1,n2,n3];
    let resultado = document.getElementById("alertResultado2");

}
    );



// Adivinar un número entre el 1 y el 100 en el menor número de pasos posibles
// Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3
let btnMultiplo =document.getElementById("btnMultiplo")
let inputNum5 = document.getElementById("inputNum5");
let alertResult3 = document.getElementById("alertResult3")
btnMultiplo.addEventListener("click",function(event){
    event.preventDefault();
        number = parseInt(inputNum5.value);
        let residuo = number %3;
        if (number>=100 && number<=200){
            if(residuo == 0){
                alertResult3.innerHTML = `El numero ${number} es multiplo de 3`
            }else{
                alertResult3.innerHTML = `El numero ${number} no es multiplo de 3`
            }
        }
    
});





// Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos













// Elabora un algoritmo para leer un número y determinar si es par o impar

let btnPar = document.getElementById("btnPar");
btnPar.addEventListener("click",function(event){
    event.preventDefault();
    let inputNum9 = parseInt(document.getElementById("inputNum9").value);
    let result_Par = document.getElementById("alertResult");
    if(inputNum9 %2==0){
        result_Par.innerHTML="El número es par.";
    }else{
        result_Par.innerHTML ="El número es impar";
    }
});