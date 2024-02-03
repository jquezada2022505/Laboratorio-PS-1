document.addEventListener('DOMContentLoaded', function() {
    const listaPendientes = document.getElementById('lista-pendientes');
    const formularioPendiente = document.getElementById('formulario-pendiente');
    const inputPendiente = document.getElementById('nuevo-pendiente');
    const selectPrioridad = document.getElementById('prioridad');
    const botonesEliminar = document.querySelectorAll('.eliminar-pendiente');

    formularioPendiente.addEventListener('submit', function(event) {
        event.preventDefault();

        const textoPendiente = inputPendiente.value;
        const prioridadPendiente = selectPrioridad.value;

        if (textoPendiente.trim() !== '') {
            agregarPendiente(textoPendiente, prioridadPendiente);
            inputPendiente.value = '';
        }
    });


    listaPendientes.addEventListener('click', function(event) {
        if (event.target.classList.contains('eliminar-pendiente')) {
            event.target.parentNode.remove();
        }
    });

    function agregarPendiente(texto, prioridad) {
        const nuevoElemento = document.createElement('div');
        nuevoElemento.textContent = `${texto} - Prioridad: ${prioridad}`;
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('eliminar-pendiente');
        nuevoElemento.appendChild(botonEliminar);
        listaPendientes.appendChild(nuevoElemento);
    }
});