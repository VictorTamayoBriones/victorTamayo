import { Alert } from "./style"

export const AlertCopyText =({active, referencia})=>{
    return(
        <Alert ref={referencia} active={active} >Mail Copied</Alert>
    )
}