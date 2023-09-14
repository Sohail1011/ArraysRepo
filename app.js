
// Los Arrays
const comidas = ['Sushi', 'Pollo con naranja', 'Gimbak', 'Lasaña', 'Lentejas', 'Pizza', 'Hamburguesa'];

// Tipos de datos que admite los arrays
const voucher = [20.5, true, '20 de mayo'];

// Método de iteración
for (let i = 0; i < comidas.length; i++) {
    console.log(comidas[i]);
}

// Arrays bidimensionales
const persona = ['Carlos', 'Urtedad', 20, ['cocinero', 'asistente']];

// Arrays con Objetos
const clientes = [
    { id: 1, name: 'Sara' },
    { id: 2, name: 'Tom' },
    { id: 3, name: 'Carl' },
    { id: 4, name: 'Juana' },
];

console.log(clientes);

// Array en Map
const restaurantes = ['Burger King', 'Wendys', 'KFC', 'Mcdonalds', 'Taco Bell'];

const mapRestaurantes = restaurantes.map((res) => {
    return `${res} - name of the restaurant`;
});

console.log(mapRestaurantes);

// Array forEach
voucher.forEach((data) => {
    console.log(`${data}`);
});