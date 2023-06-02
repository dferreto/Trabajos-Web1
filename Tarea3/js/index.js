function parImpar() {
    var numero = parseInt(document.getElementById("numero").value);
    if (isNaN(numero)) {
      alert("El valor ingresado no es un número.");
    } else if (numero % 2 === 0) {
      alert("El número es par.");
    } else {
      alert("El número es impar.");
    }
  }
  
  function comprobarMayusculas() {
    const texto = document.getElementById("texto").value;
    let mensaje = "";
    if (texto === texto.toUpperCase()) {
      mensaje = "El texto está formado solo por mayúsculas.";
    } else if (texto === texto.toLowerCase()) {
      mensaje = "El texto está formado solo por minúsculas.";
    } else {
      mensaje = "El texto está formado por una mezcla de mayúsculas y minúsculas.";
    }
    alert(mensaje);
  }
  
  function comprobarPalindromo() {
    const texto = document.getElementById("palindromo").value.toLowerCase();
    let mensaje = "";

    // Eliminamos los espacios en blanco y signos de puntuación
    const textoSinEspacios = texto.replace(/[\W_]/g, "");

    // Comprobamos si el texto es igual al revés
    if (textoSinEspacios === textoSinEspacios.split("").reverse().join("")) {
      mensaje = "El texto es un palíndromo.";
    } else {
      mensaje = "El texto no es un palíndromo.";
    }

    alert(mensaje);
  }