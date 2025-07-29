// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// almacenar los nombres
let listaNombres = [];
console.log(listaNombres);

const entradaNombre = document.getElementById("amigo");
//console.log(entradaNombre);
const listaAmigosElemento =document.getElementById("listaAmigos");

//referencia al elemento donde se mostrara el resueltado
const resultadoElemento = document.getElementById("resultado");

//funcion agregar amigo a la lista
function agregarAmigo() {
    const nombre = entradaNombre.value.trim();
    // validar que el nombre no este vacio
    if (nombre === "") {
        alert ("por favor ingrese un nombre valido");
        return;
    }
    //agregar el nombre de amigos al array
    listaNombres.push(nombre);

    //limpiar la entrada despues de ingresar un nombre de amigo
    entradaNombre.value = "";
    //mostrar nombre en la lista
    mostarNombreLista();
}
//funcion de mostrar los nombres en html
    function mostarNombreLista () {
        //limpiar la lista antes de actualizarla
        listaAmigosElemento.innerHTML = "";
        listaNombres.forEach((nombre, index) => {
            const li = document.createElement("li");
            li.textContent = `${index + 1} , ${nombre}`;
            listaAmigosElemento.appendChild(li);
            
        });
    }
//funcion generar el nombre aleatorio 
function sortearAmigo() {
    //verificar si hay nombres en la lista
    if (listaNombres.length === 0) {
        alert("No hay nombres en la lista, por favor ingresar los nombres");
        return;
    }

    //seleccionar un nombre aleatorio de la lista
    const nombreAleatorio = Math.floor(Math.random() * listaNombres.length);
    const amigoSecreto = listaNombres[nombreAleatorio];
    //Limpiar los elementos antes de mostrar el amigo secreto
    resultadoElemento.innerHTML = "";

    // crear el elmento <li> para mostrar la seleccion del amigo secreto
    const liResultado = document.createElement("li");
    liResultado.textContent = `Tu amigo elegido es: ${amigoSecreto}`;
    resultadoElemento.appendChild(liResultado);
}
