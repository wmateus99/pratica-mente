// Components
import CardText from "./componets_pages/CardText"
import FormaDeformadaBottom from "../assets/svg/formaDeformadaBottom.svg"
import PefilTsi from "../assets/svg/PerfilTsi.svg"
import LogoBlack from '../assets/svg/LogoBlack.svg';

// Styles
// import style from "../assets/styles/CardText.module.css"
import styleBoxLeft from "../assets/styles/StyleBoxLeft.module.css"
import styleBoxRigth from "../assets/styles/StyleBoxRigth.module.css"
import styleContenInicio from "../assets/styles/ContentInicio.module.css"

export default function Inicio() {

    return (
        <section className={styleContenInicio.contentInicio}>
            <div className={styleContenInicio.leftLimited}></div>
            <div className={styleBoxLeft.boxLeft}>
                <div className={styleBoxLeft.logoLeft}>
                    <img src={LogoBlack}/>
                </div>
                <CardText
                titleCard="Jogo de Digitação"
                href="https://spacetsi.netlify.app/pags/_game-digitacao/digitar.html"
                classIcon="ri-arrow-right-up-box-line"
                descricao="Vamos lá! Cada tecla que você aperta é um passo a mais rumo à velocidade, foco e superação. Mostre que você é capaz de ir além!"
                />
                <div className={styleBoxLeft.itemOculto}></div>
            </div>
            <div className={styleBoxRigth.boxRigth}>
                <div className={styleBoxRigth.boxTsi}>
                    <p>
                        Ainda não segue a Tsi no Instagram? 
                        Aponte a câmera do seu celular para o
                        QRcode e fique por dentro de todas as notícias!
                    </p>
                    <img src={PefilTsi}/>
                </div>
                <img className={styleBoxRigth.ImgFundo} src={FormaDeformadaBottom}/>
            </div>
        </section>
    )
}