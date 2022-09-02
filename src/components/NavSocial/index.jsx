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
            <GitLogo onClick={ ()=> window.open( 'https://github.com/VictorTamayoBriones' ,'_blank') || window.location.replace('https://github.com/VictorTamayoBriones') } />
            <LinkedinLogo onClick={ ()=> window.open( 'https://www.linkedin.com/in/v%C3%ADctor-manuel-tamayo-briones-9a8582159/' ,'_blank') || window.location.replace('https://www.linkedin.com/in/v%C3%ADctor-manuel-tamayo-briones-9a8582159/') } />
            <InstaLogo onClick={ ()=> window.open( 'https://www.instagram.com/victormanueltamayobtiones/' ,'_blank') || window.location.replace('https://www.instagram.com/victormanueltamayobtiones/') } />
            <AlertCopyText active={alerCopyTextState} referencia={alertRef} />
            <MailLogo onClick={handleCopyMail}/>
        </SocialNetworks>
    )
}