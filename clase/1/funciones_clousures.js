//Funciones y Closures
//Punto 1
function mostrarLista(lista) {
    
    if (lista.length > 0) {
        console.log(lista);
        return;
    }

    console.log('Lista vacia');
}

mostrarLista([]);
mostrarLista(["hola", "mundo", "como", "estas"]);

//Punto 2
(
    function (lista) {
    
        if (lista.length > 0) {
            console.log(lista);
            return;
        }
    
        console.log('Lista vacia');
    }
)([1, 2, 3]);

//Punto 3
function crearMultiplicador(numero_1) {
    return function(numero_2) {
        return numero_1 * numero_2;
    }
}

function duplicar(numero) {
    return crearMultiplicador(2)(numero);
}

function triplicar(numero) {
    return crearMultiplicador(3)(numero);
}


let resultado = crearMultiplicador(3)(4);
console.log("Resultado crearMultiplicador(): ", resultado);

resultado = duplicar(3, 5);
console.log("Resultado duplicar(): ", resultado);

resultado = triplicar(3, 5);
console.log("Resultado triplicar(): ", resultado);
