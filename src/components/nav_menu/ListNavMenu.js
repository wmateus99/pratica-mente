import style from "../../assets/styles/NavMenu.module.css"
import { Link } from "react-router-dom"

export default function ListMenu({classIcon, textMenu, linkName}) {
    return (
        // <div className={style.listMenu}>
            <Link to={linkName}>
                <i data-title={textMenu} className={`${style.iconMenu} ${classIcon}`}></i>
            </Link>
        // </div>
    )
}