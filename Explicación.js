let mapa = new Map();3
mapa.set("clave", "valor");
console.log(mapa.get("clave"));

//El codigo contiene una estructura de datos llamada MAP
//El objetivo es crear un objeto llamado mapa
//La funcion set funciona para agregar una clave y valor al mapa
//La funcion get funciona para recuperar el valor de clave y luego imprime en consola el valor





mapa.set("clave1", "valor1");
mapa.set("clave2", "valor2");

mapa.forEach((valor, clave) => {
  console.log(`Clave: ${clave}, Valor: ${valor}`);
});

//Mediante el metodo set se agregan mas pares claves y valor
//Luego tenemos el metodo forEach que funciona para recorrer todos los elementos del mapa
//En este caso el forEach recibe los parametros de clave y valor de cada elemento
//De esta forma se imprime en consola el valor y clave de cada elemento mediante una plantilla cadena





let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 3, 5, 7, 9];
let duplicados = contarDuplicados(arr);

for (let [num, count] of duplicados) {
    console.log(`Número: ${num}, Cantidad: ${count}`);
}

//A continuacion tenemos un ejercicio el cual contiene un array con una serie de numeros
//Llamamos a una funcion de contar duplicados tomando el array como argumento
//Esta funcion recibe el array y devuelve los numeros duplicados y la cantidad de veces que aparecen
//Por ultimo se imprime en la consola el numero y la cantidad correspondiente





function contarDuplicados(arr) {
    let mapa = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (mapa.has(arr[i])) {
            mapa.set(arr[i], mapa.get(arr[i]) + 1);
        } else {
            mapa.set(arr[i], 1);
        }
    }

    let duplicados = new Map();

    for (let [num, count] of mapa) {
        if (count > 1) {
            duplicados.set(num, count);
        }
    }

    return duplicados;
}

//Se crea una funcion de contar duplicados recibe un array como argumento
//Esta funcion mediante un bucle for cuenta la cantidad de veces en las que aparece un numero
//De esta forma si el numero ya esta en el mapa se incrementa su contador