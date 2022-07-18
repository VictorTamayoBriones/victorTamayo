import { FiendMeOn, GitLogo, InstaLogo, MailLogo, SocialNetworks } from "./style"
import { SectionText } from '../../styled-components/Section';

export const Social = () =>{
    return(
        <FiendMeOn>
            <SectionText>Find me on</SectionText>
            <SocialNetworks>
                <GitLogo/>
                <InstaLogo/>
                <MailLogo/>
            </SocialNetworks>
        </FiendMeOn>
    )
}