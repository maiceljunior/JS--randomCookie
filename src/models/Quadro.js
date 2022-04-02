import {
    Atualizar
} from "../controllers/Atualizar.js"

import {
    Frases
} from "../controllers/Frases.js"



class Quadro {

    static GerarBiscoito() {
        Atualizar.AtualizarSection()
        Frases.gerarFrases()
        Atualizar.Inicio()
    }
}


export {
    Quadro
}