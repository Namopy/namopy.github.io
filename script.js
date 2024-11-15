const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzqznKJ608B8Ad8hbHo2u1nQyxAV8TM7clJFPIoDDTEeF22mqwBAuTeoaO37d_ydSZKHA/exec"; // Cambia XXXXX por tu URL

function openForm(destino) {
    document.getElementById('destino').value = destino; // Asignar destino al formulario
    document.getElementById('form-container').style.display = 'block'; // Mostrar formulario
}

function closeForm() {
    document.getElementById('entry-form').reset(); // Limpiar formulario
    document.getElementById('form-container').style.display = 'none'; // Ocultar formulario
}

async function submitForm(event) {
    event.preventDefault();

    const motivo = document.getElementById('motivo').value;
    const destino = document.getElementById('destino').value;
    const fecha = new Date().toISOString(); // Fecha y hora actual en formato ISO

    const data = {
        nombre: "Ignacio", // Nombre predeterminado
        fecha: fecha,
        destino: destino,
        motivo: motivo,
    };

    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Especifica el tipo de contenido
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert('Datos registrados correctamente.');
        } else {
            alert('Error al registrar los datos.');
        }
    } catch (error) {
        console.error('Error al enviar los datos:', error);
        alert('Error de conexión.');
    }

    closeForm();
}
