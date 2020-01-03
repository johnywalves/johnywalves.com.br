import React from 'react';
// Components
import Profile from "../Profile";
import SocialLinks from "../SocialLinks";
import MenuLinks from "../MenuLinks";
// Style
import * as S from "./styled";

const Sidebar = () =>
    <S.SidebarWrapper>
        <Profile />
        <SocialLinks />
        <MenuLinks />
    </S.SidebarWrapper>

export default Sidebar;