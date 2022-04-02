class Atualizar {

    static AtualizarSection() {

        //SECTION BISCOITO
        const sectionBiscoito = document.getElementById('section-biscoito')

        //SECTION FRASE
        const sectionFrase = document.querySelector('.frase-biscoito')

        //AUDIO BISCOITO
        const audio = document.querySelector('audio')

        audio.play()
        sectionBiscoito.classList.add('esconder')
        sectionFrase.classList.remove('esconder')

    }


    static Inicio() {

        //SECTION FRASE BISCOITO
        const sectionFrase = document.querySelector('.frase-biscoito')

        //SECTION BISCOITO
        const sectionBiscoito = document.getElementById('section-biscoito')

        //BTN INICIO
        const buttonInicio = document.getElementById('inicio')


        buttonInicio.addEventListener('click', () => {
            sectionFrase.classList.add('esconder')
            sectionBiscoito.classList.remove('esconder')

        })

    }

}

export {
    Atualizar
}