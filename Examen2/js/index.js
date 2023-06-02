const calculadora = document.querySelector('.calculadora');
const mostrar = calculadora.querySelector('.calculadora__mostrar');
const teclas= calculadora.querySelector('.calculadora__tecla');


teclas.addEventListener('click', event => {
  if (!event.target.closest('button')) 
  
  return

  const tecla = event.target; 
  const valorTecla = tecla.textContent; 
  let mostrarValor = mostrar.textContent; 
  const {type} = tecla.dataset; 
  const { previousKeyType } = calculadora.dataset;


  if (type === 'numero') { 
    if (mostrarValor === '0' || previousKeyType === 'calcular' || previousKeyType === 'igual') {
        mostrar.textContent = valorTecla;
    } else {
        mostrar.textContent = mostrarValor + valorTecla;
    }
    
  } else if (type === 'punto') { 
    if (mostrarValor.includes('.')) 
    
    return;
    mostrar.textContent = mostrarValor + '.';
  }

  
  if (type === 'calcular') { 
    calculadora.dataset.num1 = mostrarValor;
    calculadora.dataset.calcular = tecla.dataset.key;
  }

  if (type === 'igual') {
    
    if (calculadora.dataset.num1 === '0' || mostrarValor === '0' && calculadora.dataset.calcular === 'dividir'){
        mostrar.textContent = 'ERROR' 
    } else {
        mostrar.textContent = calculate(calculadora.dataset.num1, calculadora.dataset.calcular, mostrarValor) 
    }
  }

 
  if (type === 'limpiar'){ 
    mostrar.textContent = '0';
    delete num1; 
    delete calcular;
  }
  calculadora.dataset.previousKeyType = type;
}
)


function calculate (num1, calcular, num2) {
  
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
 
  if (calcular === 'sumar') return num1 + num2;
  if (calcular === 'restar') return num1 - num2;
  if (calcular === 'dividir') return num1 / num2;
  if (calcular === 'multiplicar') return num1 * num2;
}

