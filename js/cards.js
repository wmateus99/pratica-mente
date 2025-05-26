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
    att02: Card("Revise Assuntos", "/pages/assets_atividades/_windows/atividade-revisao.pdf", "Praticar habilidades básicas de manipulação de arquivos, download de imagens da internet, edição de texto no Bloco de Notas e criação de uma colagem simples no Paint."),
    att03: Card("Pratique o Mouse", "/pages/assets_atividades/_windows/pratica-do-mouse.pdf", "Nesta atividade, você vai treinar o uso do mouse: clicar, clicar duas vezes, arrastar e soltar, escolhendo menus, abrindo programas, inserindo e salvando arquivos — tudo para ganhar precisão, rapidez e confiança no manuseio do computador.")
}
export const ExcelLeft = {
    att01: Card("Planilha Simples", "/pages/assets_atividades/_excel/atividades_de_excel_(simples).pdf", "Nesta atividade, você vai aprender a usar o Excel formatando uma tabela simples. Vai aplicar bordas, centralizar textos, mudar cores e aplicar formatação de moeda. Tudo isso com um passo a passo bem claro para te ajudar a conhecer as ferramentas básicas do programa."),
    att02: Card("Despesas do Ano", "/pages/assets_atividades/_excel/despesas_do_ano.pdf", "Aqui você vai montar uma planilha para controlar as contas da casa, como água, luz e despesas domésticas mês a mês. O objetivo é calcular quanto foi gasto em cada mês e quanto sobrou do salário. Um ótimo jeito de aprender Excel enquanto pratica o controle financeiro pessoal."),
    att03: Card("Planilha Intermediária", "/pages/assets_atividades/_excel/duas_planilhas_intermediarias.pdf", "Nessa atividade, você vai trabalhar com duas tabelas de vendas por trimestre, aplicando fórmulas para somar, achar o valor máximo, mínimo e calcular médias. Também vai montar uma planilha com despesas mensais e saldo. É um ótimo exercício para treinar fórmulas e comparar dados.")
}
export const WordLeft = {
    att01: Card("Evolução da Internet", "/pages/assets_atividades/_word/evolucao_da_informatica.pdf", "Você vai ler e entender como a informática evoluiu desde os primeiros computadores até os dias de hoje. Depois, vai organizar essas informações no Word, praticando leitura, escrita e formatação de texto. É uma forma de conhecer a história da tecnologia enquanto treina o uso do Word."),
    att02: Card("Fluxograma", "/pages/assets_atividades/_word/fluxograma.pdf", "Neste exercício, você vai criar um fluxograma no Word, organizando passos e decisões de um processo. É uma ótima atividade para desenvolver o raciocínio lógico e aprender a representar processos de forma visual, como se fosse um 'mapa' de ações."),
    att03: Card("História da Internet", "/pages/assets_atividades/_word/historia_da_internet.pdf", "Aqui você vai conhecer os momentos mais importantes da criação e evolução da internet, desde a ARPANET até os dias atuais. A atividade envolve leitura e organização dessas informações no Word, ajudando a entender como surgiu essa tecnologia essencial no nosso dia a dia.")
}
export const InternetLeft = {
    att01: Card("Em Breve", "", "Isso é uma descrição de Internet!"),
    att02: Card("", "#", "Isso é uma descrição de Internet!"),
    att03: Card("Atividade 02", "#", "Isso é uma descrição de Internet!"),
}
export const PowerPointLeft = {
    att01: Card("Crie sua Apresentação", "/pages/assets_atividades/_powerpoint/mostre_sua_criatividade.pdf", "Esta atividade estimula sua criatividade e suas habilidades no PowerPoint. Você deverá escolher um assunto de seu interesse, pesquisar sobre ele e transformar um conteúdo amplo em uma apresentação simples, visualmente atrativa e fácil de entender."),
    att02: Card("Atividade 02", "#", "Isso é uma descrição de PowerPoint!")
}
export const PhotoshopLeft = {
    att01: Card("Ajustando Imagem", "/pages/assets_atividades/_photoshop/Atividade_Photoshop_AjustandoImagens.pdf", "A tarefa tem como objetivo ajudar o aluno a aprimorar suas habilidades no Photoshop através da criação de uma composição surreal utilizando imagens de diferentes fontes."),
    att02: Card("Atividade 02", "#", "Isso é uma descrição de Photoshop!")
}
export const AapLeft = {
    att01: Card("Introdução à Informática", "/pages/assets_atividades/_extracurricular/01.html", "Avaliar o conhecimento básico sobre o funcionamento e a estrutura do computador, assim como a familiaridade com o uso de sistemas operacionais."),
    att02: Card("Windows", "/pages/assets_atividades/_extracurricular/02.html", "Avaliar a habilidade de uso do sistema operacional Windows, incluindo personalização e organização de arquivos."),
    att03: Card("Internet", "/pages/assets_atividades/_extracurricular/03.html", "Avaliar a capacidade de utilizar navegadores, buscar informações com eficiência e entender conceitos de segurança na internet.")
}
export const TecsLeft = {
    att01: Card("Excel - 01", "/pages/assets_atividades/_tecs/excel/excel01.pdf", "Essa atividade tem como objetivo praticar o uso do Excel e aprimorar os seguintes cálculos matemáticos: Adição, Subtração, Multiplicação e Divisão."),
    att02: Card("Excel - 02", "/pages/assets_atividades/_tecs/excel/excel02.pdf", "Essa atividade tem como objetivo praticar o uso do Excel e aprimorar o desenvolvimento de planilhas com as seguintes fórmulas básicas: Média, Máximo, Mínimo e Soma."),
    att03: Card("Excel - 03", "/pages/assets_atividades/_tecs/excel/excel03.pdf", "Essa atividade tem como objetivo praticar o desenvolvimento de planilha no Excel, além de utilizar gráficos e tabelas para facilitar o entendimento de uma base de dados."),
    att04: Card("Excel - 04", "/pages/assets_atividades/_tecs/excel/excel04.pdf", "Utilizar o Excel para criar uma planilha com nomes, idades e situação (maior ou menor de idade), aplicando a fórmula SE para automatizar o resultado."),
    att05: Card("Excel - 05", "/pages/assets_atividades/_tecs/excel/excel05.pdf", "Criar uma planilha no Excel utilizando as funções HOJE e AGORA, e aplicar Validação de Dados para controlar os valores de estoque. Finalizar com formatação visual e apresentar ao instrutor."),
}


// Cads de Cada Módulo do Lado Direito
export const WindowsRigth = {
    att01: Card("Missão 01", "/pages/assets_atividades/_windows/_missoes/missoes_01_windows.pdf", "Imagine que você é um técnico de informática e o computador que está em sua frente é o aparelho eletrônico que o cliente trouxe até sua loja para fazer algumas configurações."),
    att02: Card("Missão 02", "/pages/assets_atividades/_windows/_missoes/missoes_02_windows.pdf", "Você é um técnico de informática e está prestando um atendimento na loja para um cliente que acabou de comprar um computador novo."),
    att03: Card("Missão 03", "/pages/assets_atividades/_windows/_missoes/missoes_03_windows.pdf", "Você é técnico de informática e foi chamado para configurar o computador novo de uma cliente.")
}
export const ExcelRigth = {
    att01: Card("Média de Alunos", "/pages/assets_atividades/_excel/media_de_alunos.pdf", "Você vai criar uma planilha escolar com nomes de alunos e notas dos quatro bimestres. Depois, vai calcular a média de cada aluno e mostrar se ele está aprovado ou reprovado. Um exercício prático para quem quer dominar fórmulas simples e condições no Excel."),
    att02: Card("Retiro", "/pages/assets_atividades/_excel/retiro.pdf", "Nesta atividade, você organizará os participantes de um retiro em equipes e calculará a pontuação de cada grupo em diferentes provas. Ao final, verá qual equipe venceu. É uma ótima maneira de usar Excel para somar pontos e comparar resultados de forma visual e prática."),
    att03: Card("7 Planilhas Básicas", "/pages/assets_atividades/_excel/sete_planilhas_basicas.pdf", "Neste conjunto de exercícios, você vai montar várias tabelas: horários escolares, listas de preços com descontos, eleitorado por cidade, boletim escolar, classificação de seleções esportivas e até uma tabela de cervejas. Um pacote completo para praticar várias funções básicas do Excel de forma bem aplicada ao dia a dia.")
}
export const WordRigth = {
    att01: Card("Pesquisando e Praticando", "/pages/assets_atividades/_word/pesquisando_e_praticando.pdf", "Você vai fazer uma pesquisa sobre algo que gosta — como uma série, esporte ou música — e montar um texto no Word com o conteúdo que encontrar. Pode personalizar à vontade com cores, imagens e formatações. É uma atividade livre para praticar digitação, pesquisa e criatividade."),
    att02: Card("Revolução Digital", "/pages/assets_atividades/_word/revolucao_digital.pdf", "O objetivo desta atividade é praticar a edição de texto no Word, aprimorando habilidades como formatação, utilização de atalhos e organização de conteúdo. Ao copiar e ajustar o texto sobre a Revolução Digital, o aluno desenvolverá destreza no manuseio do programa, tornando-se mais ágil e eficiente na edição de documentos.")
}
export const InternetRigth = {
    att01: Card("Atividade 01", "#", "Isso é uma descrição de Internet!"),
    att02: Card("Atividade 02", "#", "Isso é uma descrição de Internet!")
}
export const PowerPointRigth = {
    att01: Card("Mais em Breve", "#", "Isso é uma descrição vazia de PowerPoint!")
}
export const PhotoshopRigth = {
    att01: Card("Texto 3D", "/pages/assets_atividades/_photoshop/photoshop-texto3d.pdf", "Este exercício irá te ajudar a melhorar ainda mais no processo de criação de textos 3D no Photosho."),
    att02: Card("Atividade 02", "#", "Isso é uma descrição de Photoshop!")
}
export const AapRigth = {
    att01: Card("Word", "/pages/assets_atividades/_extracurricular/04.html", "Avaliar a capacidade de usar as ferramentas básicas do Word para criar documentos profissionais."),
    att02: Card("Excel", "/pages/assets_atividades/_extracurricular/05.html", "Avaliar a capacidade de criar, formatar e fazer cálculos básicos em planilhas.")
}
export const TecsRigth = {
    att01: Card("Título", "https://cdn.dicionariopopular.com/imagens/rindo-com-respeito-cke-0.jpg?auto_optimize=low", "None None None"),
    att02: Card("Título", "https://correio-cdn2.cworks.cloud/fileadmin/user_upload/correio24horas/2018/06/24/suica_2.jpg", "None None None")
}