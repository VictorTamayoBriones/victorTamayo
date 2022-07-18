import { FiendMeOn, GitLogo, InstaLogo, MailLogo, SocialNetworks } from "./style"
import { SectionText } from '../../styled-components/Section';

export const Social = () =>{
    return(
        <FiendMeOn>
            <SectionText>Find me on</SectionText>
            <NavSocial/>
        </FiendMeOn>
    )
}

export const NavSocial = () =>{
    return(
        <SocialNetworks>
            <a href='https://github.com/VictorTamayoBriones' ><GitLogo/></a>
            <a href='https://www.instagram.com/victormanueltamayobtiones/' ><InstaLogo/></a>
            <a href='/' ><MailLogo/></a>
        </SocialNetworks>
    )
}