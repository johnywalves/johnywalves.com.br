import React from "react"
// Components
import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"
import RSSLinks from "../RSSLinks"
// Style
import * as S from "./styled"

const Sidebar = () => (
  <S.SidebarWrapper>
    <S.ProfileWrapper>
      <Profile />
      <SocialLinks />
      <MenuLinks />
    </S.ProfileWrapper>
    <RSSLinks />
  </S.SidebarWrapper>
)

export default Sidebar
