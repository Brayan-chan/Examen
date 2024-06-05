document.addEventListener('DOMContentLoaded', function() {
    //Seleccionamos los id de los elementos
    const rojo = document.getElementById('rojo')

    const azul = document.getElementById('azul')

    const info = document.querySelector('.info')

    const coche = document.getElementById('coche')

    azul.addEventListener('click', function(evento) {
        evento.preventDefault()
        info.innerHTML =
        '<p>El color de tu coche es <span class="azul">azul</span></p>'
        coche.innerHTML =
        '🚙'
    })

    rojo.addEventListener('')
})