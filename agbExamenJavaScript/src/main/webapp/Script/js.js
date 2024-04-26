
let envios = [];

function anyadir() {

	let nombreCliente = prompt("Escriba el nombre del cliente");

	let costeEnvio = prompt("Escriba el coste");

	let dia = prompt("Ingrese el día ");
	let mes = prompt("Ingrese el mes ");
	let anyo = prompt("Ingrese el año ");

	if (fechaEntrada.getDay() === 0) {

		fechaEntrada.setDate(fechaEntrada.getDate() + 1);
	}

	let fechaEntrada = new Date(anyo, (mes - 1), dia);

	fechaEntrada.setDate(fechaEntrada.getDate() + 5);

	let fechaSalida = new Date(fechaEntrada);

	let envio = { nombreCliente: nombreCliente, costeEnvio: costeEnvio, fechaEntrada: fechaEntrada, fechaSalida: fechaSalida };

	envios.push(envio);


	console.log("Lista de envíos:");

	console.log("---------------------------------------------------------");
	console.log("| User  | Coste    | FechaEntrada     | FechaSalida     |");
	console.log("---------------------------------------------------------");

	envios.forEach(envio => {

		console.log(envio.nombreCliente + " " + envio.costeEnvio + "  " + envio.fechaEnvio + "  " + envio.fechaSalida);
	});

}

function quitar() {
	let nombreEliminar = prompt("Ingrese el nombre del cliente para eliminar el envio");
	let eliminar = -1;


	for (let i = 0; i < envios.length; i++) {

		if (envios[i].nombreCliente === nombreEliminar) {

			eliminar = i;

			envios.splice(eliminar);
			break;
		}
	}

	if (eliminar !== -1) {

		console.log(" Envio de " + nombreEliminar + "eliminado correctamente.");
	}
}