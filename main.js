import { WindowsLeft, ExcelLeft, WordLeft, InternetLeft, PowerPointLeft, PhotoshopLeft, AapLeft, TecsLeft} from "./js/cards.js"
import { WindowsRigth, ExcelRigth, WordRigth, InternetRigth, PowerPointRigth, PhotoshopRigth, AapRigth, TecsRigth} from "./js/cards.js"

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
            labelModulo.innerHTML = "Atividade Avaliativa Profissional"
            boxLeft.innerHTML = AapLeft.att01 + AapLeft.att02 + AapLeft.att03
            boxRigth.innerHTML = AapRigth.att01 + AapRigth.att02
            break
        case 7:
            labelModulo.innerHTML = "Treinamento Essencial de Computação e Sistemas"
            boxLeft.innerHTML = '<h3><i class="ri-align-bottom"></i> Excel <i class="ri-align-bottom"></i></h3>' + TecsLeft.att01 + TecsLeft.att02 + TecsLeft.att03 + TecsLeft.att04 + TecsLeft.att05
            boxRigth.innerHTML = boxRigth.innerHTML = '<h3><i class="ri-align-bottom"></i> Em Breve <i class="ri-align-bottom"></i></h3>' + TecsRigth.att01 + TecsRigth.att02
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
