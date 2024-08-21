// Variables y Constantes
const nombreNegocio = "Indumentaria Vitanon";
let inventario = [];

// Función para agregar prendas al inventario
function agregarPrenda() {
    let tipoPrenda = prompt("Selecciona el tipo de prenda que quieres agregar:\n" +
                            "1. Pantalones\n" +
                            "2. Remeras\n" +
                            "3. Zapatillas");

    let nombrePrenda;
    switch (tipoPrenda) {
        case "1":
            nombrePrenda = "Pantalones";
            break;
        case "2":
            nombrePrenda = "Remeras";
            break;
        case "3":
            nombrePrenda = "Zapatillas";
            break;
        default:
            alert("ERROR - TIPO DE PRENDA NO VALIDO. VUELVE A INTENTARLO.");
            return;
    }

    let cantidad = parseInt(prompt(`Ingresa la cantidad de ${nombrePrenda} que deseas agregar al inventario:`));
    let precio = parseFloat(prompt(`Ingresa el precio unitario de ${nombrePrenda}:`));
    
    let prenda = {
        nombre: nombrePrenda,
        cantidad: cantidad,
        precio: precio
    };
    
    inventario.push(prenda);
    console.log(`Se han agregado ${cantidad} unidades de ${nombrePrenda} al inventario.`);
}

// Función para simular la venta de una prenda
function venderPrenda() {
    let tipoPrenda = prompt("Selecciona el tipo de prenda que quieres vender:\n" +
                            "1. Pantalones\n" +
                            "2. Remeras\n" +
                            "3. Zapatillas");

    let nombrePrenda;
    switch (tipoPrenda) {
        case "1":
            nombrePrenda = "Pantalones";
            break;
        case "2":
            nombrePrenda = "Remeras";
            break;
        case "3":
            nombrePrenda = "Zapatillas";
            break;
        default:
            alert("ERROR: TIPO DE PRENDA NO VALIDO. VUELVE A INTENTARLO.");
            return;
    }

    let cantidadVendida = parseInt(prompt(`¿Cuántas unidades de ${nombrePrenda} deseas vender?`));

    let prenda = inventario.find(item => item.nombre === nombrePrenda);

    if (prenda) {
        if (prenda.cantidad >= cantidadVendida) {
            prenda.cantidad -= cantidadVendida;
            let totalVenta = cantidadVendida * prenda.precio;
            console.log(`Has vendido ${cantidadVendida} unidades de ${nombrePrenda}.`);
            console.log(`Total generado: $${totalVenta.toFixed(2)}`);
            alert(`Venta exitosa. Total generado: $${totalVenta.toFixed(2)}\n` +
                  `Quedan ${prenda.cantidad} unidades de ${nombrePrenda} en inventario.`);
        } else {
            alert(`No tienes suficientes unidades de ${nombrePrenda} en el inventario.`);
        }
    } else {
        alert(`No se encontró la prenda ${nombrePrenda} en el inventario.`);
    }
}

// Función para actualizar el inventario actual
function actualizarInventario() {
    console.log(`Inventario actual de ${nombreNegocio}:`);
    inventario.forEach(prenda => {
        console.log(`${prenda.nombre} - ${prenda.cantidad} unidades disponibles - $${prenda.precio.toFixed(2)} cada una.`);
    });
    alert(`Consulta la consola para ver el inventario actualizado.`);
}

// Función principal del simulador
function iniciarSimulador() {
    console.log(`Bienvenido al simulador de ${nombreNegocio}`);
    
    let continuar = true;
    while (continuar) {
        let opcion = prompt("INVENTARIO DE PRENDAS - Selecciona una opción:\n" +
                            "1. Agregar prenda al inventario\n" +
                            "2. Vender prenda\n" +
                            "3. Actualizar inventario\n" +
                            "4. Salir");

        switch (opcion) {
            case "1":
                agregarPrenda();
                break;
            case "2":
                venderPrenda();
                break;
            case "3":
                actualizarInventario();
                break;
            case "4":
                continuar = false;
                alert("GRACIAS POR USAR EL SIMULADOR. CERRANDO");
                break;
            default:
                alert("ERROR: OPCIÓN NO VALIDA - VUELVE A INTENTARLO.");
                break;
        }
    }
}

// Iniciar el simulador
iniciarSimulador();
