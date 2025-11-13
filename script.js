console.log(" ============ CLASE 1 ============ ");console.log("============ Introducción a JavaScript y Sintaxis Básica ============");

// Ejercicio 1: Crea una variable nombre con tu nombre y úsala para imprimir un mensaje
let ej2_nombre = "Benjamin";
console.log(`Ejercicio 1: Declaración de variable nombre: ${ej2_nombre}`);

// Ejercicio 2: Declara y suma dos números, muestra el resultado en consola
let ej2_num1 = 8;
let ej2_num2 = 12;
let ej2_suma = ej2_num1 + ej2_num2;
console.log(`Ejercicio 2: El resultado de la suma ${ej2_num1} + ${ej2_num2} = ${ej2_suma}`);

// Ejercicio 3: Usa operadores lógicos para evaluar si 10 > 5 y 5 < 2
let ej2_a = 10;
let ej2_b = 5;
let ej2_c = 2;
let ej2_evaluacion = (ej2_a > ej2_b) && (ej2_b < ej2_c);
console.log(`Ejercicio 3: Evaluación de (${ej2_a} > ${ej2_b} && ${ej2_b} < ${ej2_c}): ${ej2_evaluacion}`);

// Ejercicio 4: Declara variables con let y const y nota las diferencias al intentar cambiarlas
let ej2_varLet = 1;
const ej2_varConst = 3;
console.log(`Ejercicio 4: Variable con let inicializada en ${ej2_varLet}, variable con const inicializada en ${ej2_varConst}`);
ej2_varLet = 7;
console.log(`Ejercicio 4: Variable let cambiada a ${ej2_varLet}, variable const permanece en ${ej2_varConst}`);

// Ejercicio 5: Escribe un comentario que explique qué hace tu código (Este mismo comentario es el ejemplo)
// Este ejercicio demuestra el uso de comentarios en JavaScript para documentar el código
console.log(`Ejercicio 5: Los comentarios en JavaScript comienzan con // (comentario simple) o /* */ (comentario múltiple)`);

// Ejercicio 6: Declara una variable de tipo boolean y úsala en una operación lógica
let ej2_esAdulto = true;
let ej2_resultado = ej2_esAdulto ? "Puede votar" : "No puede votar";
console.log(`Ejercicio 6: Variable booleana esAdulto: ${ej2_esAdulto}. Resultado lógico: ${ej2_resultado}`);

// Ejercicio 7: Imprime el tipo de dato de una variable usando typeof
let ej2_variable = "Hola Mundo";
let ej2_tipo = typeof ej2_variable;
console.log(`Ejercicio 7: El tipo de dato de '${ej2_variable}' es: ${ej2_tipo}`);

// Ejercicio 8: Declara un array y muestra uno de sus elementos en la consola
let ej2_array = [5, 10, 2, 8, 3];
console.log(`Ejercicio 8: Array: [${ej2_array.join(', ')}]. El primer elemento es: ${ej2_array[0]}`);

// Ejercicio 9: Usa una operación con % para encontrar el resto de 17 ÷ 3
let ej2_dividendo = 17;
let ej2_divisor = 3;
let ej2_modulo = ej2_dividendo % ej2_divisor;
console.log(`Ejercicio 9: El resto de ${ej2_dividendo} ÷ ${ej2_divisor} es: ${ej2_modulo}`);

// Ejercicio 10: Declara una variable sin valor e imprime su valor inicial
let ej2_sinValor;
console.log(`Ejercicio 10: Variable sin inicializar tiene el valor: ${ej2_sinValor}`);



console.log("");
console.log(" ============ CLASE 2 ============ ");

console.log("============ Estructuras de Control ============");
// Ejercicios de Estructuras de Control

// Ejercicio 1: Escribe un programa que verifique si un número es positivo o negativo
let ec_num1 = -4;
let ec_res1 = ec_num1 > 0 ? `El número ${ec_num1} es positivo.` : (ec_num1 < 0 ? `El número ${ec_num1} es negativo.` : `El número ${ec_num1} es cero.`);
console.log(`Ejercicio 1: ${ec_res1}`);
document.getElementById("ec_span1").textContent = ec_res1;

// Ejercicio 2: Usa switch para imprimir el día de la semana según un número del 1 al 7
let ec_dia = 3; // 1=Lunes ... 7=Domingo
let ec_nombreDia;
switch (ec_dia) {
    case 1: ec_nombreDia = 'Lunes'; break;
    case 2: ec_nombreDia = 'Martes'; break;
    case 3: ec_nombreDia = 'Miércoles'; break;
    case 4: ec_nombreDia = 'Jueves'; break;
    case 5: ec_nombreDia = 'Viernes'; break;
    case 6: ec_nombreDia = 'Sábado'; break;
    case 7: ec_nombreDia = 'Domingo'; break;
    default: ec_nombreDia = 'Número fuera de rango (debe ser 1-7)';
}
console.log(`Ejercicio 2: El día ${ec_dia} corresponde a: ${ec_nombreDia}`);
document.getElementById("ec_span2").textContent = `Día ${ec_dia}: ${ec_nombreDia}`;

// Ejercicio 3: Haz un bucle for que imprima los números del 1 al 10
let ec_numeros = [];
for (let i = 1; i <= 10; i++) {
    ec_numeros.push(i);
}
console.log(`Ejercicio 3: Números del 1 al 10: ${ec_numeros.join(', ')}`);
document.getElementById("ec_span3").textContent = ec_numeros.join(', ');

// Ejercicio 4: Crea un programa que calcule el factorial de un número usando while
let ec_num4 = 5;
let ec_factorial;
if (ec_num4 < 0) {
    ec_factorial = `No se puede calcular el factorial de un número negativo (${ec_num4}).`;
} else {
    let ec_fact = 1;
    let ec_contador = ec_num4;
    while (ec_contador > 1) {
        ec_fact *= ec_contador;
        ec_contador--;
    }
    ec_factorial = `El factorial de ${ec_num4} es ${ec_fact}.`;
}
console.log(`Ejercicio 4: ${ec_factorial}`);
document.getElementById("ec_span4").textContent = ec_factorial;

// Ejercicio 5: Escribe un condicional que determine si una persona puede votar según su edad
let ec_edad = 17;
let ec_puedeVotar = ec_edad >= 18 ? `Con ${ec_edad} años, puede votar.` : `Con ${ec_edad} años, NO puede votar.`;
console.log(`Ejercicio 5: ${ec_puedeVotar}`);
document.getElementById("ec_span5").textContent = ec_puedeVotar;

// Ejercicio 6: Imprime los números pares entre 1 y 20 con un bucle for
let ec_pares = [];
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) ec_pares.push(i);
}
console.log(`Ejercicio 6: Números pares entre 1 y 20: ${ec_pares.join(', ')}`);
document.getElementById("ec_span6").textContent = ec_pares.join(', ');

// Ejercicio 7: Usa switch para imprimir un mensaje dependiendo de la calificación (A, B, C, D, F)
let ec_calificacion = 'B';
let ec_mensaje;
switch (ec_calificacion.toUpperCase()) {
    case 'A': ec_mensaje = 'Excelente'; break;
    case 'B': ec_mensaje = 'Muy bien'; break;
    case 'C': ec_mensaje = 'Bien'; break;
    case 'D': ec_mensaje = 'Insuficiente'; break;
    case 'F': ec_mensaje = 'Desaprobado'; break;
    default: ec_mensaje = 'Calificación inválida';
}
console.log(`Ejercicio 7: Calificación ${ec_calificacion} => ${ec_mensaje}`);
document.getElementById("ec_span7").textContent = `${ec_calificacion} = ${ec_mensaje}`;

// Ejercicio 8: Haz un programa que pida dos números y los sume si ambos son positivos
let ec_num8a = 4;
let ec_num8b = 6;
let ec_suma8 = (ec_num8a > 0 && ec_num8b > 0) ? `${ec_num8a} + ${ec_num8b} = ${ec_num8a + ec_num8b}` : `No se sumaron (al menos uno no es positivo)`;
console.log(`Ejercicio 8: ${ec_suma8}`);
document.getElementById("ec_span8").textContent = ec_suma8;

// Ejercicio 9: Escribe un bucle while que cuente de 10 a 1 en orden descendente
let ec_numRegresivo = 10;
let ec_cuentaRegresiva = [];
while (ec_numRegresivo >= 1) {
    ec_cuentaRegresiva.push(ec_numRegresivo);
    ec_numRegresivo--;
}
console.log(`Ejercicio 9: Cuenta regresiva: ${ec_cuentaRegresiva.join(', ')}`);
document.getElementById("ec_span9").textContent = ec_cuentaRegresiva.join(', ');

// Ejercicio 10: Crea una calculadora básica que permita sumar o restar según el operador ingresado
let ec_calc_a = 7;
let ec_calc_b = 3;
let ec_operador = '+';
let ec_resultadoCalc;
if (ec_operador === '+') {
    ec_resultadoCalc = `${ec_calc_a} + ${ec_calc_b} = ${ec_calc_a + ec_calc_b}`;
} else if (ec_operador === '-') {
    ec_resultadoCalc = `${ec_calc_a} - ${ec_calc_b} = ${ec_calc_a - ec_calc_b}`;
} else {
    ec_resultadoCalc = `Operador '${ec_operador}' no soportado. Usa '+' o '-'.`;
}
console.log(`Ejercicio 10: ${ec_resultadoCalc}`);
document.getElementById("ec_span10").textContent = ec_resultadoCalc;


console.log("============ Funciones en JavaScript ============");
// Ejercicios de Funciones en JavaScript

// Ejercicio 1: Declarar una función que calcule el área de un triángulo
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
let f1_base = 8;
let f1_altura = 5;
console.log(`Ejercicio 1: El área de un triángulo de base ${f1_base} y altura ${f1_altura} es ${areaTriangulo(f1_base, f1_altura)}.`);

// Ejercicio 2: Función anónima que determine si un número es par o impar
const esParImpar = function (n) {
    if (!Number.isFinite(n)) return 'No es un número válido';
    return n % 2 === 0 ? `Ejercicio 2: El número ${n} es par.` : `Ejercicio 2: El número ${n} es impar.`;
};
console.log(esParImpar(7));

// Ejercicio 3: Función de flecha para multiplicar dos números
const multiplicar = (a, b) => a * b;
console.log(`Ejercicio 3: 6 * 4 = ${multiplicar(6, 4)}`);

// Ejercicio 4: Función que convierta una palabra a mayúsculas
function convertirAMayusculas(palabra) {
    return `Ejercicio 4: La palabra '${palabra}' en mayúsculas es '${String(palabra).toUpperCase()}'.`;
}
console.log(convertirAMayusculas('hola'));

// Ejercicio 5: Función que reciba dos números y retorne el mayor
function maximo(a, b) {
    return a === b ? `Ejercicio 5: Ambos son iguales (${a}).` : `Ejercicio 5: El mayor entre ${a} y ${b} es ${a > b ? a : b}.`;
}
console.log(maximo(12, 9));

// Ejercicio 6: Función que invierta una cadena
function invertirCadena(str) {
    const s = String(str);
    return `Ejercicio 6: La cadena '${s}' invertida es '${s.split('').reverse().join('')}'.`;
}
console.log(invertirCadena('javascript'));

// Ejercicio 7: Función que convierta grados Celsius a Fahrenheit
function celsiusAFahrenheit(c) {
    const f = c * 9 / 5 + 32;
    return `Ejercicio 7: ${c}°C = ${f}°F`;
}
console.log(celsiusAFahrenheit(25));

// Ejercicio 8: Función que verifique si una palabra es palíndromo
function esPalindromo(palabra) {
    const s = String(palabra).toLowerCase().replace(/[^a-z0-9]/g, '');
    const es = s === s.split('').reverse().join('');
    return `Ejercicio 8: La palabra '${palabra}' ${es ? 'es' : 'NO es'} un palíndromo.`;
}
console.log(esPalindromo('Anilina'));

// Ejercicio 9: Función que calcule la suma de los números de un arreglo
function sumaArray(arr) {
    if (!Array.isArray(arr)) return `Ejercicio 9: Entrada inválida`;
    const suma = arr.reduce((acc, cur) => acc + Number(cur || 0), 0);
    return `Ejercicio 9: La suma de [${arr.join(', ')}] es ${suma}.`;
}
console.log(sumaArray([1, 2, 3, 4, 5]));

// Ejercicio 10: Usar funciones para simular una calculadora básica (suma, resta, multiplicación, división)
// function sumar(a, b) { return a + b; }
// function restar(a, b) { return a - b; }
// function multiplicarOp(a, b) { return a * b; }
// function dividir(a, b) { return b === 0 ? NaN : a / b; }

// function calculadora(op, a, b) {
//     switch (op) {
//         case '+': return `Ejercicio 10: ${a} + ${b} = ${sumar(a, b)}`;
//         case '-': return `Ejercicio 10: ${a} - ${b} = ${restar(a, b)}`;
//         case '*': return `Ejercicio 10: ${a} * ${b} = ${multiplicarOp(a, b)}`;
//         case '/': return b === 0 ? `Ejercicio 10: División por cero no permitida` : `Ejercicio 10: ${a} / ${b} = ${dividir(a, b)}`;
//         default: return `Ejercicio 10: Operador '${op}' no soportado`;
//     }
// }

// usar prompt si existe, sino valores por defecto
// const f10_a = _leerNumero('Ejercicio 10: Ingresa el primer número para la calculadora:', 10);
// const f10_b = _leerNumero('Ejercicio 10: Ingresa el segundo número para la calculadora:', 2);
// const f10_op = (typeof prompt === 'function') ? prompt('Ejercicio 10: Ingresa operador (+, -, *, /):') : '*';
// console.log(calculadora(f10_op, f10_a, f10_b));


console.log("");
console.log(" ============ CLASE 3 ============ ");
console.log("============ Manipulacion del DOM ============");

function cambio() {
    console.log("se cambio el titulo y el background del parrafo");
    document.getElementById("tituloCambio").textContent = "Cambio de Titulo";
    let parrafo = document.getElementById("parrafoCambio");
    parrafo.style.backgroundColor = '#FF00FF';

}

// Ejercicio 1
const encabezado = document.getElementById("encabezado");
encabezado.textContent = "Texto cambiado por id desde js";

// Ejercicio 2
const parrafo2 = document.getElementById("parrafo2");
parrafo2.addEventListener("click", () => {
    parrafo2.style.backgroundColor = "#888";
})


// Ejercicio 3
const elementos = document.querySelectorAll(".miClase");
elementos.forEach((el) => {
    el.textContent = "Texto cambiado por clase";
})

// Ejercicio 4
const buton = document.getElementById("miBoton");
buton.classList.add("nuevaClase");

// Ejercicio 5
buton.classList.remove("nuevaClase");

// Ejercicio 6
const contenedor = document.getElementById("miDiv");
contenedor.innerHTML = "<strong>Nuevo contenido</strong>";

// Ejercicio 7
const parrafoTexto = document.getElementById("parrafo");
console.log(parrafoTexto.textContent);

// Ejercicio 8
const listaElementos = document.querySelectorAll(".miClase");
listaElementos.forEach((item, index) => {
    console.log(`Elemento ${index + 1}: ${item.textContent}`);
});

// Ejercicio 9
const btnOcultar = document.getElementById("btnOcultar");
const prfOcultar = document.getElementById("parrafoOcultar");

btnOcultar.addEventListener("click", () => {
    prfOcultar.style.display = "none";
})

// Ejericicio 10
const contenedor2 = document.getElementById("contenedor");
const nuevoElemento = document.createElement("p");
nuevoElemento.textContent = "Este es un nuevo parrafo creado desde js";
contenedor2.appendChild(nuevoElemento);

console.log("");
console.log("============ Eventos en JavaScript ============");

// Ejercicio 1: Crea un botón que muestre un mensaje en consola al hacer clic
const btnConsola = document.getElementById("btnConsola");
btnConsola.addEventListener("click", () => {
    console.log("Ejercicio 1: ¡Botón clickeado! Mensaje desde el evento click");
});

// Ejercicio 2: Haz que un campo de texto cambie su color de fondo al escribir
const inputCambioColor = document.getElementById("inputCambioColor");
inputCambioColor.addEventListener("input", () => {
    inputCambioColor.style.backgroundColor = "#FFEB3B";
    console.log("Ejercicio 2: Color de fondo del input cambiado a amarillo");
});

// Ejercicio 3: Implementa un contador que aumente cada vez que se hace clic en un botón
let contador = 0;
const btnContador = document.getElementById("btnContador");
btnContador.addEventListener("click", () => {
    contador++;
    btnContador.textContent = `Contador: ${contador}`;
    console.log(`Ejercicio 3: Contador incrementado a ${contador}`);
});

// Ejercicio 4: Muestra un mensaje de error si un campo de texto está vacío al enviar un formulario
const formularioValidacion = document.getElementById("formularioValidacion");
const campoTexto = document.getElementById("campoTexto");
const mensajeError = document.getElementById("mensajeError");

formularioValidacion.addEventListener("submit", (e) => {
    e.preventDefault();
    if (campoTexto.value.trim() === "") {
        mensajeError.textContent = "Ejercicio 4: Error - El campo de texto está vacío";
        console.log("Ejercicio 4: Validación fallida - campo vacío");
    } else {
        mensajeError.textContent = `Ejercicio 4: ¡Validado! Hola ${campoTexto.value}`;
        console.log(`Ejercicio 4: Validado correctamente - ${campoTexto.value}`);
    }
});

// Ejercicio 5: Cambia la posición de un elemento cuando se pase el ratón sobre él
const elementoMovible = document.getElementById("elementoMovible");
elementoMovible.addEventListener("mouseover", () => {
    elementoMovible.style.position = "relative";
    elementoMovible.style.left = "50px";
    elementoMovible.style.top = "20px";
    elementoMovible.style.backgroundColor = "#FF5722";
    console.log("Ejercicio 5: Elemento movido al pasar el ratón");
});

elementoMovible.addEventListener("mouseout", () => {
    elementoMovible.style.left = "0px";
    elementoMovible.style.top = "0px";
    elementoMovible.style.backgroundColor = "#007BFF";
    console.log("Ejercicio 5: Elemento vuelto a su posición original");
});

// Ejercicio 6: Detecta y muestra en la consola la tecla presionada
document.addEventListener("keypress", (e) => {
    console.log(`Ejercicio 6: Tecla presionada: ${e.key} (Código: ${e.code})`);
});

// Ejercicio 7: Implementa un botón que oculte o muestre un elemento (toggle)
const btnToggle = document.getElementById("btnToggle");
const elementoToggle = document.getElementById("elementoToggle");

btnToggle.addEventListener("click", () => {
    if (elementoToggle.style.display === "none") {
        elementoToggle.style.display = "block";
        console.log("Ejercicio 7: Elemento mostrado");
    } else {
        elementoToggle.style.display = "none";
        console.log("Ejercicio 7: Elemento ocultado");
    }
});

// Ejercicio 8: Crea un campo de selección que actualice un párrafo con la opción seleccionada
const selectOpciones = document.getElementById("selectOpciones");
const parrafoActualizado = document.getElementById("parrafoActualizado");

selectOpciones.addEventListener("change", () => {
    if (selectOpciones.value !== "") {
        parrafoActualizado.textContent = `Ejercicio 8: Seleccionaste: ${selectOpciones.value}`;
        console.log(`Ejercicio 8: Opción seleccionada: ${selectOpciones.value}`);
    } else {
        parrafoActualizado.textContent = "Selecciona una opción arriba";
    }
});

// Ejercicio 9: Implementa un formulario con validación para correos electrónicos
const formularioEmail = document.getElementById("formularioEmail");
const inputEmail = document.getElementById("inputEmail");
const mensajeEmailValidacion = document.getElementById("mensajeEmailValidacion");

formularioEmail.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = inputEmail.value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regexEmail.test(email)) {
        mensajeEmailValidacion.textContent = `Ejercicio 9: ¡Email válido! ${email}`;
        mensajeEmailValidacion.style.color = "green";
        console.log(`Ejercicio 9: Email validado correctamente: ${email}`);
    } else {
        mensajeEmailValidacion.textContent = "Ejercicio 9: Error - Email inválido";
        mensajeEmailValidacion.style.color = "red";
        console.log("Ejercicio 9: Email inválido");
    }
});

// Ejercicio 10: Haz un evento que cambie el texto de un botón al hacer clic
const btnCambioTexto = document.getElementById("btnCambioTexto");
let textos = ["Haz clic", "¡Clickeado!", "Hazlo de nuevo", "¡Vueltas y vueltas!"];
let indiceTexto = 0;

btnCambioTexto.addEventListener("click", () => {
    indiceTexto = (indiceTexto + 1) % textos.length;
    btnCambioTexto.textContent = textos[indiceTexto];
    console.log(`Ejercicio 10: Texto cambiado a: ${textos[indiceTexto]}`);
});

console.log("");
console.log("============ Arreglos y Objetos ============");

// Ejercicio 1: Crea un arreglo con 5 números y muestra el tercero en consola
const arreglo1 = [10, 20, 30, 40, 50];
const tercero = arreglo1[2];
console.log(`Ejercicio 1: El tercer elemento del arreglo [${arreglo1.join(', ')}] es: ${tercero}`);
document.getElementById("span1").textContent = tercero;

// Ejercicio 2: Agrega un nuevo elemento a un arreglo usando push
const arreglo2 = [5, 10, 15];
const btnAgregarElemento = document.getElementById("btnAgregarElemento");
btnAgregarElemento.addEventListener("click", () => {
    arreglo2.push(20);
    console.log(`Ejercicio 2: Nuevo elemento agregado. Arreglo actualizado: [${arreglo2.join(', ')}]`);
    document.getElementById("span2").textContent = `[${arreglo2.join(', ')}]`;
});
document.getElementById("span2").textContent = `[${arreglo2.join(', ')}]`;

// Ejercicio 3: Elimina el último elemento de un arreglo y muéstralo en consola
const arreglo3 = [100, 200, 300, 400, 500];
const eliminado = arreglo3.pop();
console.log(`Ejercicio 3: Elemento eliminado: ${eliminado}. Arreglo restante: [${arreglo3.join(', ')}]`);
document.getElementById("span3").textContent = eliminado;

// Ejercicio 4: Usa map para multiplicar por 2 cada número de un arreglo
const arreglo4 = [1, 2, 3, 4, 5];
const arregloMultiplicado = arreglo4.map(num => num * 2);
console.log(`Ejercicio 4: Arreglo original: [${arreglo4.join(', ')}]. Multiplicado por 2: [${arregloMultiplicado.join(', ')}]`);
document.getElementById("span4").textContent = `[${arregloMultiplicado.join(', ')}]`;

// Ejercicio 5: Filtra un arreglo para obtener solo los números mayores a 10
const arreglo5 = [5, 8, 15, 12, 3, 20, 9, 25];
const arregloFiltrado = arreglo5.filter(num => num > 10);
console.log(`Ejercicio 5: Arreglo original: [${arreglo5.join(', ')}]. Mayores a 10: [${arregloFiltrado.join(', ')}]`);
document.getElementById("span5").textContent = `[${arregloFiltrado.join(', ')}]`;

// Ejercicio 6: Declara un objeto con las propiedades nombre, edad, y profesión
const objeto1 = {
    nombre: "Juan",
    edad: 28,
    profesion: "Ingeniero"
};
console.log(`Ejercicio 6: Objeto creado: Nombre=${objeto1.nombre}, Edad=${objeto1.edad}, Profesión=${objeto1.profesion}`);
document.getElementById("span6").textContent = `{nombre: "${objeto1.nombre}", edad: ${objeto1.edad}, profesión: "${objeto1.profesion}"}`;

// Ejercicio 7: Accede y muestra el valor de una propiedad de un objeto
const objeto2 = {
    nombre: "María",
    edad: 25,
    profesion: "Diseñadora"
};
const nombreObjeto2 = objeto2.nombre;
console.log(`Ejercicio 7: Accediendo a la propiedad 'nombre': ${nombreObjeto2}`);
document.getElementById("span7").textContent = nombreObjeto2;

// Ejercicio 8: Agrega un método a un objeto que devuelva un saludo personalizado
const objeto3 = {
    nombre: "Carlos",
    edad: 30,
    profesion: "Abogado",
    saludar: function() {
        return `Hola, mi nombre es ${this.nombre} y soy ${this.profesion}`;
    }
};
const saludo = objeto3.saludar();
console.log(`Ejercicio 8: ${saludo}`);
document.getElementById("span8").textContent = saludo;

// Ejercicio 9: Usa reduce para sumar todos los números de un arreglo
const arreglo9 = [10, 20, 30, 40, 50];
const sumaArreglo = arreglo9.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(`Ejercicio 9: Suma de [${arreglo9.join(', ')}] = ${sumaArreglo}`);
document.getElementById("span9").textContent = sumaArreglo;

// Ejercicio 10: Combina arreglos y objetos: Crea un arreglo de objetos y recórrelo
const personas = [
    { nombre: "Alice", edad: 25, profesion: "Médica" },
    { nombre: "Bob", edad: 30, profesion: "Profesor" },
    { nombre: "Charlie", edad: 35, profesion: "Arquitecto" }
];

const nombres = personas.map(persona => persona.nombre);
console.log(`Ejercicio 10: Nombres del arreglo de objetos: ${nombres.join(', ')}`);
personas.forEach((persona, index) => {
    console.log(`Ejercicio 10 - Persona ${index + 1}: ${persona.nombre} (${persona.edad} años, ${persona.profesion})`);
});
document.getElementById("span10").textContent = nombres.join(', ');

