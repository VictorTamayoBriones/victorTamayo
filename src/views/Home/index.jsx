import CV from './cv.pdf';
import { Social } from "../../components/SocialMedia"
import { Section, SectionList, SectionListItem, SectionText, SectionTitle } from "../../styled-components/Section"

export const Home = () =>{
    return(
        <>
            <Section>
                <SectionTitle>Hello World!</SectionTitle>

                <SectionText>
                    My name is Víctor Tamayo i am a web developer so in love with front-end. I started to code in 2019 with JavaScript. I usually use react for my projects.
                    <a className='cv' href={CV}>Download my CV.</a>
                </SectionText>

                <Social/>
            </Section>

            <Section>
                <SectionTitle mb="30px" >Technologies</SectionTitle>

                <SectionList>
                    <SectionListItem>JavaScript</SectionListItem>
                    <SectionListItem>Node js</SectionListItem>
                    <SectionListItem>React</SectionListItem>
                    <SectionListItem>Angular</SectionListItem>
                    <SectionListItem>Postgres</SectionListItem>
                    <SectionListItem>Firebase</SectionListItem>
                </SectionList>

            </Section>

            <Section>
                <SectionTitle mb="30px" >University education</SectionTitle>

                <SectionList>
                    <SectionListItem mb="30px" >TSU. Desarrollo de software multiplataforma.</SectionListItem>
                    <SectionListItem >ING. Desarrollo y gestión de software.</SectionListItem>
                </SectionList>

            </Section>
        </>
    )
}