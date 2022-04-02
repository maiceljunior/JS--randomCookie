class Regras {

    static Guia() {

        const modalGuia = document.querySelector('.modal-regras')
        modalGuia.classList.remove('esconder')

        const fecharGuia = document.querySelector('.btn-modal')
        fecharGuia.addEventListener('click', () => {
            modalGuia.classList.add('esconder')
        })
    }

}

export {
    Regras
}