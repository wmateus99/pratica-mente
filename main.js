import { WindowsLeft, ExcelLeft, WordLeft, InternetLeft, PowerPointLeft, PhotoshopLeft, ExtracurricularLeft } from "./js/cards.js"
import { WindowsRigth, ExcelRigth, WordRigth, InternetRigth, PowerPointRigth, PhotoshopRigth, ExtracurricularRigth } from "./js/cards.js"

// Variáveis
const boxLeft = document.querySelector('.list-box-left')
const boxRigth = document.querySelector('.list-box-rigth')
const btnAtividades = document.querySelectorAll('.btn-att')
const labelModulo = document.getElementById('label-modulo')

// Função que troca o menu conforme o índice
function trocarMenu(index) {
    localStorage.setItem('menuAtivo', index) // salva o menu selecionado
    switch (parseInt(index)) {
        case 0:
            labelModulo.innerHTML = "Windows"
            boxLeft.innerHTML = WindowsLeft.att01 + WindowsLeft.att02 + WindowsLeft.att03
            boxRigth.innerHTML = WindowsRigth.att01 + WindowsRigth.att02 + WindowsRigth.att03
            break
        case 1:
            labelModulo.innerHTML = "Excel"
            boxLeft.innerHTML = ExcelLeft.att01 + ExcelLeft.att02 + ExcelLeft.att03
            boxRigth.innerHTML = ExcelRigth.att01 + ExcelRigth.att02 + ExcelRigth.att03
            break
        case 2:
            labelModulo.innerHTML = "Word"
            boxLeft.innerHTML = WordLeft.att01 + WordLeft.att02 + WordLeft.att03
            boxRigth.innerHTML = WordRigth.att01 + WordRigth.att02
            break
        case 3:
            labelModulo.innerHTML = "Internet"
            boxLeft.innerHTML = InternetLeft.att01
            boxRigth.innerHTML = InternetRigth.att01
            break
        case 4:
            labelModulo.innerHTML = "PowerPoint"
            boxLeft.innerHTML = PowerPointLeft.att01
            boxRigth.innerHTML = PowerPointRigth.att01
            break
        case 5:
            labelModulo.innerHTML = "Photoshop"
            boxLeft.innerHTML = PhotoshopLeft.att01
            boxRigth.innerHTML = PhotoshopRigth.att01
            break
        case 6:
            labelModulo.innerHTML = "Extracurricular"
            boxLeft.innerHTML = ExtracurricularLeft.att01 + ExtracurricularLeft.att02 + ExtracurricularLeft.att03
            boxRigth.innerHTML = ExtracurricularRigth.att01 + ExtracurricularRigth.att02
            break
        default:
            labelModulo.innerHTML = '<span style="color:red;" >Algo deu errado no código fonte!</span>'
    }
}

// Evento de clique para cada botão
btnAtividades.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        trocarMenu(index)
    })
})

// Ao carregar a página, recupera o menu salvo
window.onload = function () {
    const menuSalvo = localStorage.getItem('menuAtivo') || 0
    trocarMenu(menuSalvo)
}
