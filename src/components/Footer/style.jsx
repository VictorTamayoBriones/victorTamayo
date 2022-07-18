import styled from 'styled-components';
import { theme } from '../../theme';

export const FooterStyled = styled.footer`
    width: 100%;
    color: ${ theme.tealSea5 };
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    padding: 8px;
    align-items: center;

    @media(max-width: 700px){
        font-size: 12px;
        svg{
            width: 18px;
            height: 18px;
        }
    }
`;

export const Copy = styled.section`
    font-weight: 300;
    span{
        color: ${ theme.tealSea2 };
        text-shadow: -.3px -.3px ${ theme.tealSea3 }, -.6px -.6px ${ theme.tealSea4 }, -.9px -.9px ${ theme.tealSea5 };
    }
`;