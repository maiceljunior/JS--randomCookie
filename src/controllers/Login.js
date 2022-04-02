import {
    db
} from '../db/db.js'

class Login {

    static pegarLogin(event) {

        event.preventDefault()

        //PEGANDO O NOME DO USUARIO
    
        const form = event.target
        const user = form[0].value

        db.Login.push(user)

        //REALIZANDO O LOGIN
        const loginSection = document.querySelector('.login-container')
        loginSection.classList.add('esconder')


        //ACESSANDO O NOME DA PESSOA E PASSANDO PRO TEXTO
        const loginNome = document.querySelector('#LoginNome')
        loginNome.innerHTML = `Olá <span id="nome-pessoa">${db.Login[0]}</span>, seja bem vindo(a)!!`
        
        //COLOCAR O DISPLAY DO GAME
        const sectionGame = document.querySelector('.biscoito')
        sectionGame.classList.remove('esconder')

        const header = document.querySelector('.header-container')
        header.classList.remove('esconder')
    }


}

export {
    Login
}