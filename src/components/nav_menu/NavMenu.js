import style from "../../assets/styles/NavMenu.module.css";
import React, { useState, useEffect } from 'react';

import LogoIconWhite from '../../assets/svg/LogoIconeWhite.svg';
import LogoWhite from '../../assets/svg/LogoWhite.svg';
import ListMenu from './ListNavMenu';

export default function NavMenu() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        // Limpeza ao desmontar o componente
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className={style.menu}>
            <div className={style.logo}>
                <img src={windowWidth < 700 ? LogoWhite : LogoIconWhite} alt="Logo"/>
            </div>

            <nav className={style.navMenu}>
                <ListMenu classIcon="ri-home-9-fill" textMenu="Início" linkName="/" />
                <ListMenu classIcon="ri-file-text-fill" textMenu="Atividades" linkName="/atividades" />
                <ListMenu classIcon="ri-keyboard-box-fill" textMenu="Textos" linkName="/textos" />
                <ListMenu classIcon="ri-import-fill" textMenu="Auxiliares" linkName="/auxiliares" />
                <ListMenu classIcon="ri-file-edit-fill" textMenu="Provas" linkName="/provas" />
                <ListMenu classIcon="ri-error-warning-fill" textMenu="Sobre" linkName="/sobre" />
            </nav>
        </section>
    );
}