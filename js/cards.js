export default function Card(title, link, text) {
    return `<div class="card-text-box">
                <div class="box-title-link">
                    <h2>${title}</h2>
                    <a href="${link}">
                        <i class="ri-arrow-right-up-box-line"></i>
                    </a>
                </div>
                <p>${text}</p>
            </div>`
}

// Cads de Cada Módulo do Lado Esquerdo
export const WindowsLeft = {
    att01: Card("Pratique Atalhos", "/pages/assets_atividades/_windows/atalhos-teclado.pdf", "O objetivo da atividade é treinar o uso de atalhos do teclado, manipulação de texto no Word e Bloco de Notas, além de ensinar a alternar entre janelas e áreas de trabalho no Windows, usando tarefas simples do dia a dia."),
    att02: Card("Revise Assuntos", "/pages/assets_atividades/_windows/atividade-revisao.pdf", "Praticar habilidades básicas de manipulação de arquivos, download de imagens da internet, edição de texto no Bloco de Notas e criação de uma colagem simples no Paint.")
}
export const ExcelLeft = {
    att01: Card("Atividade 01", "#", "Isso é uma descrição de Excel!"),
    att02: Card("Atividade 02", "#", "Isso é uma descrição de Excel!")
}
export const WordLeft = {
    att01: Card("Atividade 01", "#", "Isso é uma descrição de Word!"),
    att02: Card("Atividade 02", "#", "Isso é uma descrição de Word")
}
export const InternetLeft = {
    att01: Card("Atividade 01", "#", "Isso é uma descrição de Internet!"),
    att02: Card("Atividade 02", "#", "Isso é uma descrição de Internet!")
}
export const PowerPointLeft = {
    att01: Card("Atividade 01", "#", "Isso é uma descrição de PowerPoint!"),
    att02: Card("Atividade 02", "#", "Isso é uma descrição de PowerPoint!")
}
export const PhotoshopLeft = {
    att01: Card("Atividade 01", "#", "Isso é uma descrição de Photoshop!"),
    att02: Card("Atividade 02", "#", "Isso é uma descrição de Photoshop!")
}
export const ExtracurricularLeft = {
    att01: Card("Atividade 01", "#", "Isso é uma descrição de Extracurricular!"),
    att02: Card("Atividade 02", "#", "Isso é uma descrição de Extracurricular!")
}


// Cads de Cada Módulo do Lado Direito
export const WindowsRigth = {
    att01: Card("Pratique o Mouse", "/pages/assets_atividades/_windows/pratica-do-mouse.pdf", "Nesta atividade, você vai treinar o uso do mouse: clicar, clicar duas vezes, arrastar e soltar, escolhendo menus, abrindo programas, inserindo e salvando arquivos — tudo para ganhar precisão, rapidez e confiança no manuseio do computador."),
    att02: Card("Atividade 02", "#", "Isso é uma descrição de Windows!")
}
export const ExcelRigth = {
    att01: Card("Atividade 01", "#", "Isso é uma descrição de Excel!"),
    att02: Card("Atividade 02", "#", "Isso é uma descrição de Excel!")
}
export const WordRigth = {
    att01: Card("Atividade 01", "#", "Isso é uma descrição de Word!"),
    att02: Card("Atividade 02", "#", "Isso é uma descrição de Word!")
}
export const InternetRigth = {
    att01: Card("Atividade 01", "#", "Isso é uma descrição de Internet!"),
    att02: Card("Atividade 02", "#", "Isso é uma descrição de Internet!")
}
export const PowerPointRigth = {
    att01: Card("Atividade 01", "#", "Isso é uma descrição de PowerPoint!"),
    att02: Card("Atividade 02", "#", "Isso é uma descrição de PowerPoint!")
}
export const PhotoshopRigth = {
    att01: Card("Atividade 01", "#", "Isso é uma descrição de Photoshop!"),
    att02: Card("Atividade 02", "#", "Isso é uma descrição de Photoshop!")
}
export const ExtracurricularRigth = {
    att01: Card("Atividade 01", "#", "Isso é uma descrição de Extracurricular!"),
    att02: Card("Atividade 02", "#", "Isso é uma descrição de Extracurricular!")
}