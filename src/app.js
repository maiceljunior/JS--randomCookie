import { Quadro } from './models/Quadro.js'
import { Regras } from './controllers/Regras.js'
import { Login } from './controllers/Login.js'

const btnBiscoito = document.querySelector('#btnBiscoito')
btnBiscoito.addEventListener('click', Quadro.GerarBiscoito)

const btnGuia = document.getElementById('guia')
btnGuia.addEventListener('click', Regras.Guia)

const loginBtn = document.querySelector('.login')
loginBtn.addEventListener('submit', Login.pegarLogin)









