const provincias = [
    "Buenos Aires",
    "Ciudad Autónoma de Buenos Aires",
    "Córdoba",
    "Mendoza",
    "Santa Fe",
    "Tucumán",
];

const candidatos = [];

// Función para agregar un candidato
const agregarCandidato = () => {
    const nombre = prompt("Ingresa el nombre del candidato:");
    const partido = prompt("Ingresa el partido político del candidato:");
    const porcentajes = Array(provincias.length).fill(0);

    let seleccionando = true;
    while (seleccionando) {
        let mensajeProvincias = "Provincias disponibles:\n";
        provincias.forEach((provincia, index) => {
            mensajeProvincias += `${index + 1}. ${provincia}\n`;
        });

        const inputProvincia = prompt(mensajeProvincias + "Selecciona el número de una provincia (0 para terminar):");
        const provinciaIndex = parseInt(inputProvincia) - 1;

        if (inputProvincia === "0") {
            seleccionando = false;
        } else if (!isNaN(provinciaIndex) && provinciaIndex >= 0 && provinciaIndex < provincias.length) {
            const porcentaje = parseFloat(prompt(`Ingresa el % de votos obtenido en ${provincias[provinciaIndex]}:`)) || 0;
            porcentajes[provinciaIndex] = porcentaje;
            alert(`Votos registrados en ${provincias[provinciaIndex]}.`);
        } else {
            alert("Opción inválida. Intenta de nuevo.");
        }
    }

    candidatos.push({ nombre, partido, porcentajes });
    alert(`Candidato ${nombre} agregado con éxito.`);
};

// Función para listar los resultados generales
const resultadosGenerales = () => {
    if (candidatos.length === 0) {
        alert("No hay candidatos cargados.");
        return;
    }

    let mensaje = "Resultados generales:\n";
    candidatos.forEach((candidato) => {
        const total = candidato.porcentajes.reduce((acc, votos) => acc + votos, 0).toFixed(2);
        mensaje += `${candidato.nombre} (${candidato.partido}): ${total}%\n`;
    });

    alert(mensaje);
};

// Función para listar los resultados provinciales
const resultadosProvinciales = () => {
    if (candidatos.length === 0) {
        alert("No hay candidatos cargados.");
        return;
    }

    let mensajeProvincias = "Provincias disponibles:\n";
    provincias.forEach((provincia, index) => {
        mensajeProvincias += `${index + 1}. ${provincia}\n`;
    });

    const inputProvincia = prompt(mensajeProvincias + "Selecciona el número de la provincia:");
    const provinciaIndex = parseInt(inputProvincia) - 1;

    if (!isNaN(provinciaIndex) && provinciaIndex >= 0 && provinciaIndex < provincias.length) {
        let mensaje = `Resultados en ${provincias[provinciaIndex]}:\n`;
        candidatos.forEach((candidato) => {
            mensaje += `${candidato.nombre} (${candidato.partido}): ${candidato.porcentajes[provinciaIndex]}%\n`;
        });
        alert(mensaje);
    } else {
        alert("Número de provincia inválido.");
    }
};

// Función para eliminar un candidato
const eliminarCandidato = () => {
    if (candidatos.length === 0) {
        alert("No hay candidatos para eliminar.");
        return;
    }

    listarCandidatos();
    const candidatoIndex = parseInt(prompt("Selecciona el número del candidato a eliminar:")) - 1;

    if (isNaN(candidatoIndex) || candidatoIndex < 0 || candidatoIndex >= candidatos.length) {
        alert("Número de candidato inválido.");
        return;
    }

    candidatos.splice(candidatoIndex, 1);
    alert("Candidato eliminado con éxito.");
};

// Función para listar candidatos
const listarCandidatos = () => {
    if (candidatos.length === 0) {
        alert("No hay candidatos cargados.");
        return;
    }

    let mensaje = "Candidatos cargados:\n";
    candidatos.forEach((candidato, index) => {
        mensaje += `${index + 1}. ${candidato.nombre} (${candidato.partido})\n`;
    });

    alert(mensaje);
};

// Función para cargar votos en una provincia específica
const cargarVotosProvincia = () => {
    if (candidatos.length === 0) {
        alert("No hay candidatos cargados.");
        return;
    }

    listarCandidatos();
    const candidatoIndex = parseInt(prompt("Selecciona el número del candidato:")) - 1;

    if (isNaN(candidatoIndex) || candidatoIndex < 0 || candidatoIndex >= candidatos.length) {
        alert("Número de candidato inválido.");
        return;
    }

    let mensajeProvincias = "Provincias disponibles:\n";
    provincias.forEach((provincia, index) => {
        mensajeProvincias += `${index + 1}. ${provincia}\n`;
    });

    const inputProvincia = prompt(mensajeProvincias + "Selecciona el número de la provincia:");
    const provinciaIndex = parseInt(inputProvincia) - 1;

    if (!isNaN(provinciaIndex) && provinciaIndex >= 0 && provinciaIndex < provincias.length) {
        const porcentaje = parseFloat(prompt(`Ingresa el % de votos obtenido en ${provincias[provinciaIndex]}:`)) || 0;
        candidatos[candidatoIndex].porcentajes[provinciaIndex] = porcentaje;
        alert(`Votos cargados para ${candidatos[candidatoIndex].nombre} en ${provincias[provinciaIndex]}.`);
    } else {
        alert("Número de provincia inválido.");
    }
};

// Inicia el simulador
const iniciarSimulador = () => {
    let ejecutando = true;
    while (ejecutando) {
        const opcion = prompt(
            "Selecciona una opción:\n" +
            "1. Agregar candidato\n" +
            "2. Cargar votos en provincia\n" +
            "3. Eliminar candidato\n" +
            "4. Listar candidatos\n" +
            "5. Ver resultados generales\n" +
            "6. Ver resultados provinciales\n" +
            "7. Salir"
        );

        switch (opcion) {
            case "1":
                agregarCandidato();
                break;
            case "2":
                cargarVotosProvincia();
                break;
            case "3":
                eliminarCandidato();
                break;
            case "4":
                listarCandidatos();
                break;
            case "5":
                resultadosGenerales();
                break;
            case "6":
                resultadosProvinciales();
                break;
            case "7":
                ejecutando = false;
                break;
            default:
                alert("Opción inválida. Intenta de nuevo.");
        }
    }
};

iniciarSimulador();
