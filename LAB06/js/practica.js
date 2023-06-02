
var gunter = {
name: "Gunter",
origin: "Adventure Time",
canFly: false,
sayHello: function () {
console.log("QUACK!!!");
}
};

var ramon = {
name: "Ramón",
origin: "Happy Feet",
canFly: true,
sayHello: function () {
console.log("Estoy encantado de conocerle.");
}
};

var fred = {
name: "Fred",
origin: "Sitting Ducks",
canFly: false,
sayHello: function () {
console.log("Hi there!");
}
}; 


// Cree un arreglo con los 3 pingüinos adentro. (recuerden que pueden
// asignar valores de variables y no quemar valores dentro del arreglo.)

var pinguinos = [gunter, ramon, fred]; 
console.log(pinguinos);

// Escriba un ciclo for para iterar a través de cada pingüino en la matriz e imprima 
// el valor de la propiedad del nombre de cada pingüino en la consola. 

for(var i=0; i< pinguinos.length; i++){
    console.log("Nombre: " + pinguinos[i].name);
};

// Imprima la longitud de la matriz de pingüinos en la consola.

console.log("La longitud de la matriz es: "+ pinguinos.length);

// Escriba un ciclo for para iterar a través de cada pingüino en la matriz y agreguen 
// una nueva propiedad a cada pingüino llamado numberOfFeet con un valor aleatorio del 1 al 5

for(var i=0; i< pinguinos.length; i++){
    pinguinos[i].numberOfFeet = Math.floor(Math.random()*5) +1; 
    //Math.floor sirve para redendear un número al múltiplo o al entero inferior más próximo de la cifra significativa especificada.
    //Math.random devuelve un número de coma flotante pseudo-aleatorio, comprendido en el rango de 0 a menor que 1.
    console.log("Numero de pies es: " + pinguinos[i].numberOfFeet); 
};

// Escriba otro ciclo for para iterar a través de cada pingüino en la matriz, y
// para cada pingüino que pueda volar, imprima en la consola un mensaje que
// contenga el nombre del pingüino y "¡puede volar!" - por ejemplo, "¡Gunter
// puede volar!" o "¡Ramón puede volar!" (No hagas nada por los pingüinos
// que no pueden volar). 

for(var i=0; i< pinguinos.length; i++){
    if(pinguinos[i].canFly){
        console.log("!" + pinguinos[i].name + " puede volar!");
    }
};

// Devuelva un arreglo solo con los pingüinos que tienen más de 2 pies. 
var masDeDosPies = pinguinos.filter(function(pinguinos){
    
    return pinguinos.numberOfFeet>2;
}
);

console.log(masDeDosPies);

// Agregue una nueva propiedad a su pingüino llamada favoriteFoods y
// configúrela igual a una matriz que contiene una lista de tres cadenas. 

for (var i = 0; i < pinguinos.length; i++){

    pinguinos[i].favoriteFoods = ["Pescado", "Calamares", "Krill"];
};

// Accede a la segunda comida favorita de sus pingüinos e imprímela en la
// consola usando console.log () 

for (var i = 0; i < pinguinos.length; i++){

    console.log("Su nombre es: "+ pinguinos[i].name + " y su segunda comida favorita es: " +pinguinos[i].favoriteFoods[1]);

};

// Sin modificar nada de su código anterior, escriba una nueva línea de código
// que cambie el valor del último elemento de la lista a "piñas"
// (sobrescribiendo el valor anterior). 

for (var i = 0; i < pinguinos.length; i++){

    pinguinos[i].favoriteFoods[2] = "Piñas"

};

// Escriba un cilo for para recorrer cada comida en la propiedad de comida
// favorita de sus pingüinos e imprima cada una en la consola. 

for (var i = 0; i < pinguinos.length; i++){

    console.log(pinguinos[i].favoriteFoods);

};





