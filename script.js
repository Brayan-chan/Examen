document.addEventListener('DOMContentLoaded', function () {
    const modelo = document.getElementById('modelo');
    const inputColores = document.querySelectorAll('input[name="color"]');
    const inputsAccesorios = document.querySelectorAll('input[name="accesorio"]');

    const modeloSeleccionado = document.getElementById('modelo-seleccionado');
    const colorSeleccionado = document.getElementById('color-seleccionado');
    const accesoriosSeleccionados = document.getElementById('accesorios-seleccionados');

    modelo.addEventListener('change', function () { //change para escuchar los cambios
        modeloSeleccionado.textContent = modelo.value;
    });

    inputColores.forEach(input => { //forEach para recorrer los elementos
        input.addEventListener('change', function () { //change para escuchar los cambios
            colorSeleccionado.textContent = input.value; //value para mostrar el valor
            colorSeleccionado.className = 'seleccion ' + input.value; //className para agregar clases
        });
    });

    inputsAccesorios.forEach(input => { //forEach para recorrer los elementos
        input.addEventListener('change', function () { //change para escuchar los cambios
            if (input.checked) { //checked para mostrar el valor
                accesoriosSeleccionados.textContent += input.value + ' '; //concatenamos el valor de la variable
                accesoriosSeleccionados.className = 'seleccion ' + input.value; //className para agregar clases
            } else {
                accesoriosSeleccionados.textContent = accesoriosSeleccionados.textContent.replace(input.value + ' ', ''); // + ' ', '' para borrar el valor de la variable
                accesoriosSeleccionados.className = 'seleccion'; //className para agregar clases
            }
        });
    });
});
