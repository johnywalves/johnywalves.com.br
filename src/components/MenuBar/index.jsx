import React, { useState, useEffect } from 'react'

import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { Bulb } from "@styled-icons/boxicons-regular/Bulb"
import { Grid } from "@styled-icons/boxicons-solid/Grid"
import { ListUl } from "@styled-icons/boxicons-regular/ListUl"

import * as S from './styled'

const MenuBar = () => {

    const [theme, setTheme] = useState(null);
    const [display, setDisplay] = useState(null);

    const isDarkMode = theme === "dark";
    const isListMode = display === "list";

    useEffect(() => {
        setTheme(window.__theme);
        setDisplay(window.__display);

        window.__onThemeChange = () => setTheme(window.__theme);
        window.__onDisplayChange = () => setDisplay(window.__display);
    }, [])

    const goToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <S.MenuBarWrapper>
            <S.MenuBarGroup>
                <S.MenuBarLink to="/blog/" title="Voltar para Home" cover direction="left" bg="var(--background)" duration={0.6}>
                    <S.MenuBarItem><Home /></S.MenuBarItem>
                </S.MenuBarLink>
                <S.MenuBarLink to="/search/" title="Pesquisar" cover direction="left" bg="var(--background)" duration={0.6}>
                    <S.MenuBarItem><Search /></S.MenuBarItem>
                </S.MenuBarLink>
            </S.MenuBarGroup>
            <S.MenuBarGroup>
                <S.MenuBarItem title="Mudar o tema" onClick={() => {
                    window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');
                }} className={theme}>
                    <Bulb />
                </S.MenuBarItem>
                <S.MenuBarItem title="Mudar visualização" onClick={() => {
                    window.__setPreferredDisplay(isListMode ? 'grid' : 'list');
                }}>
                    {isListMode ? <Grid /> : <ListUl />}
                </S.MenuBarItem>
                <S.MenuBarItem title="Ir para o topo">
                    <Arrow onClick={goToTop} />
                </S.MenuBarItem>
            </S.MenuBarGroup>
        </S.MenuBarWrapper>
    )
}

export default MenuBar;