import {db} from "../db/db.js"

class Frases {

    static gerarFrases(){

        const frasesBiscoito = db.frasesBiscoitos
        let geradorDeFrases = Math.floor(Math.random() * frasesBiscoito.length);

        const fraseTexto = document.getElementById('texto-biscoito')
        fraseTexto.innerText = frasesBiscoito[geradorDeFrases] 
    }
}

export {Frases}