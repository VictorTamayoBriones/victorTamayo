import { GitLogo, InstaLogo, LinkedinLogo, MailLogo } from "./style"
import { copyText } from "../../helpers/copyText";
import { SocialNetworks } from "../SocialMedia/style";
import { useRef, useState } from "react";
import { AlertCopyText } from "../AlertCopyText";

export const NavSocial = () =>{
    const alertRef = useRef();
    const[alerCopyTextState, setAlertCopyTextState]=useState(false);

    const handleCopyMail = async () =>{
        const ref = alertRef.current
        const copy = await copyText('victortamayo509@gmail.com', ref);

        setAlertCopyTextState(copy);

        setTimeout(()=>{
            setAlertCopyTextState(false);
        }, [3000])
    }

    return(
        <SocialNetworks>
            <a href='https://github.com/VictorTamayoBriones'  target="_blanck" ><GitLogo/></a>
            <a href="https://www.linkedin.com/in/v%C3%ADctor-manuel-tamayo-briones-9a8582159/" target="_blanck" ><LinkedinLogo/></a>
            <a href='https://www.instagram.com/victormanueltamayobtiones/'  target="_blanck" ><InstaLogo/></a>
            <AlertCopyText active={alerCopyTextState} referencia={alertRef} />
            <MailLogo onClick={handleCopyMail}/>
        </SocialNetworks>
    )
}