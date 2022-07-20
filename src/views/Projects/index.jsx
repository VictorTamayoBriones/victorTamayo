import { useEffect, useState } from 'react';
import { CardProject } from '../../components/CardProject';
import { getAllProjects } from '../../firebase/getAllProjects';
import { Section, SectionTitle } from '../../styled-components/Section';
import { ProjectsList } from './style';
// import { useSelector } from 'react-redux';

export const Projects = () =>{
    // const projectsList = useSelector(state => state.projects);
    const[projectsList, setProjectsList]=useState([])

    const getProjects = async () =>{
        setProjectsList(await getAllProjects())
    }

    useEffect(()=>{
        getProjects()
    }, [])

    return(
        <Section>
            <SectionTitle mb='30px' >Projects</SectionTitle>
                <ProjectsList>
            {
                projectsList.map(project =>(
                    <CardProject key={ project.title } img={ project.image } 
                        title={ project.title } 
                        desc={ project.desc } 
                        github={ project.gitHub } web={ project.web } 
                    />
                ))
            }
            </ProjectsList>
        </Section>
    )
}