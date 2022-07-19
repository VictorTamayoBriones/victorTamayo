import { NavSocial } from "../NavSocial"
import { Copy, FooterStyled } from "./style"

export const Footer = () => {
    return(
        <FooterStyled>
            <Copy>Copyright © 2022  <span>V</span> Víctor Tamayo</Copy>
            <NavSocial/>
        </FooterStyled>
    )
}