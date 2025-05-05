// Styles
import styleSobre from "../assets/styles/StyleSobre.module.css"
import styleBox from "../assets/styles/StyleBoxRigth.module.css"
import styleContenInicio from "../assets/styles/ContentInicio.module.css"

export default function Inicio() {

    return (
        <section className={styleContenInicio.contentSobre}>
            <div className={styleSobre.boxText}>
                <h2>Sobre</h2> <br/>
                <p>
                Este site foi criado com o objetivo de praticar e aplicar os conhecimentos do <strong>desenvolvedor</strong> em desenvolvimento web, além de facilitar e agilizar o trabalho como professor de Informática do mesmo. Aqui, é organizados materiais, atividades práticas e recursos que o <strong>desenvolvedor</strong> utiliza com seus alunos no dia a dia, tornando o acesso mais simples e eficiente para todos.
                </p>
                <p>
                O design e a estrutura do site refletem o estilo pessoal e a visão sobre usabilidade e estética do <strong>desenvolvedor</strong>, sem qualquer vínculo direto com a identidade visual da instituição onde ele atua. É um projeto independente, feito com dedicação tanto ao ensino quanto ao aprendizado contínuo na área de tecnologia.
                </p>

                <h2>Outras Versões do Projeto:</h2>
                <ul>
                    <li><a href="https://extsi-v1.netlify.app/">Versão 1.0</a></li>
                    <li><a href="https://extsi-v2.netlify.app/">Versão 2.0</a></li>
                    <li><a href="https://extsi.netlify.app/extsi.html">Versão 3.0</a></li>
                    <li><a href="https://spacetsi.netlify.app/">Versão 4.0</a></li>
                </ul>
            </div>
        </section>
    )
}