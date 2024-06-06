document.addEventListener('DOMContentLoaded', function () {
    const modelo = document.getElementById('modelo');
    const inputColores = document.querySelectorAll('input[name="color"]');
    const inputsAccesorios = document.querySelectorAll('input[name="accesorio"]');

    const modeloSeleccionado = document.getElementById('modelo-seleccionado');
    const colorSeleccionado = document.getElementById('color-seleccionado');
    const accesoriosSeleccionados = document.getElementById('accesorios-seleccionados');

    modelo.addEventListener('change', function () {
        modeloSeleccionado.textContent = modelo.value;
    });

    inputColores.forEach(input => {
        input.addEventListener('change', function () {
            colorSeleccionado.textContent = input.value;
            colorSeleccionado.className = 'seleccion ' + input.value.toLowerCase();
        });
    });

    inputsAccesorios.forEach(input => {
        input.addEventListener('change', function () {
           //accesoriosSeleccionados
        });
    });
});
