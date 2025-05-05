import style from "../../assets/styles/CardText.module.css"

export default function CardText({titleCard, href, classIcon, descricao}) {
    return (
        <div className={style.CardTextBox}>
            <div className={style.boxTitleLink}>
                <h2>{titleCard}</h2>
                <a href={href}>
                    <i className={classIcon}></i>
                </a>
            </div>
            <p>{descricao}</p>
        </div>
    )
}