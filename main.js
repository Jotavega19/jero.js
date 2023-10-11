// Solicitar al usuario que se registre
const nombreUsuario = prompt("Por favor, introduce tu nombre:");

if (nombreUsuario) {
    alert(`¡Bienvenido, ${nombreUsuario}! Ahora puedes comenzar a usar el simulador.`);

    // Solicitar la talla al usuario
    const talla = prompt("Selecciona tu talla (S, M, L, XL):");

    // Solicitar el color al usuario
    const color = prompt("Selecciona un color (Rojo, Azul, Verde):");

    if (talla && color) {
        alert(`Has seleccionado la talla ${talla} y el color ${color}.`);
    } else {
        alert("Por favor, asegúrate de seleccionar tanto la talla como el color.");
    }
} else {
    alert("Debes proporcionar un nombre para comenzar a usar el simulador.");
}
