import { Social } from "../../components/SocialMedia"
import { Section, SectionText, SectionTitle } from "../../styled-components/Section"

export const Home = () =>{
    return(
        <Section>
            <SectionTitle>Hello World!</SectionTitle>

            <SectionText>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis reprehenderit omnis voluptatem fugiat possimus, vitae veniam blanditiis tempora deleniti veritatis.
            </SectionText>

            <Social/>
        </Section>
    )
}