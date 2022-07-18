import { Social } from "../../components/SocialMedia"
import { Section, SectionList, SectionListItem, SectionText, SectionTitle } from "../../styled-components/Section"

export const Home = () =>{
    return(
        <>
            <Section>
                <SectionTitle>Hello World!</SectionTitle>

                <SectionText>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis reprehenderit omnis voluptatem fugiat possimus, vitae veniam blanditiis tempora deleniti veritatis.
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
                    <SectionListItem>TSU. Desarrollo de software multiplataforma.</SectionListItem>
                    <SectionListItem>ING. Desarrollo y gestión de software.</SectionListItem>
                </SectionList>

            </Section>
        </>
    )
}