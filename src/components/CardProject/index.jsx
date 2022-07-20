import { Card, CardBody, CardButtons } from "./style"
import { GitLogo, WorldIcon } from '../NavSocial/style';

export const CardProject = ({img, title, desc, github, web}) =>{

    return(
        <Card>
            <img src={img} alt={title} />
            <CardBody>
                <h3>{title}</h3>
                <p>{desc}</p>
            </CardBody>
            <CardButtons>
                <a href={github} target="_blanck" ><GitLogo/></a>
                <a href={web} target="_blanck" ><WorldIcon/></a>
            </CardButtons>
        </Card>
    )
}