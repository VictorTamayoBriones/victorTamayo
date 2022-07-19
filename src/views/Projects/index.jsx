import { CardProject } from '../../components/CardProject';
import { Section, SectionTitle } from '../../styled-components/Section';
import { ProjectsList } from './style';
import ProjectImg from '../../images/tlaxcarnivoras.png';

export const Projects = () =>{
    return(
        <Section>
            <SectionTitle mb='30px' >Projects</SectionTitle>

            <ProjectsList>
                <CardProject img={ProjectImg} 
                title="Tlaxcarnivoras" 
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam blanditiis qui perferendis." 
                github="https://github.com" web="https://google.com" />
                <CardProject img={ProjectImg} 
                title="Tlaxcarnivoras" 
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam blanditiis qui perferendis." 
                github="https://github.com" web="https://google.com" />
            </ProjectsList>

        </Section>
    )
}