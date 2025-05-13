import { WindowsLeft, ExcelLeft, WordLeft, InternetLeft, PowerPointLeft, PhotoshopLeft, ExtracurricularLeft } from "./js/cards.js"
import { WindowsRigth, ExcelRigth, WordRigth, InternetRigth, PowerPointRigth, PhotoshopRigth, ExtracurricularRigth } from "./js/cards.js"

// Variáveis
const boxLeft = document.querySelector('.list-box-left')
const boxRigth = document.querySelector('.list-box-rigth')
const btnAtividades = document.querySelectorAll('.btn-att')
const labelModulo = document.getElementById('label-modulo')

// Itens Padrão
labelModulo.innerHTML = "Windows"
boxLeft.innerHTML = WindowsLeft.att01
boxRigth.innerHTML = WindowsRigth.att01

// Função que alterna entre os Módulos
btnAtividades.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        if (index == 0) {
            labelModulo.innerHTML = "Windows"
            boxLeft.innerHTML = WindowsLeft.att01
            boxRigth.innerHTML = WindowsRigth.att01
        }
        else if (index == 1) {
            labelModulo.innerHTML = "Excel"
            boxLeft.innerHTML = ExcelLeft.att01
            boxRigth.innerHTML = ExcelRigth.att01
        }
        else if (index == 2) {
            labelModulo.innerHTML = "Word"
            boxLeft.innerHTML = WordLeft.att01
            boxRigth.innerHTML = WordRigth.att01
        }
        else if (index == 3) {
            labelModulo.innerHTML = "Internet"
            boxLeft.innerHTML = InternetLeft.att01
            boxRigth.innerHTML = InternetRigth.att01
        }
        else if (index == 4) {
            labelModulo.innerHTML = "PowerPoint"
            boxLeft.innerHTML = PowerPointLeft.att01
            boxRigth.innerHTML = PowerPointRigth.att01
        }
        else if (index == 5) {
            labelModulo.innerHTML = "Photoshop"
            boxLeft.innerHTML = PhotoshopLeft.att01
            boxRigth.innerHTML = PhotoshopRigth.att01
        }
        else if (index == 6) {
            labelModulo.innerHTML = "Extracurricular"
            boxLeft.innerHTML = ExtracurricularLeft.att01
            boxRigth.innerHTML = ExtracurricularRigth.att01
        }
        else {
            labelModulo.innerHTML = '<span style="color:red;" >Algo deu errado no código fonte!</span>'
        }
    })
})