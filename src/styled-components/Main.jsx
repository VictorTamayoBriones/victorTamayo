import styled from 'styled-components';
import { theme } from '../theme';

export const Main = styled.main`
    width: 70%;
    height: 100vh;
    margin: auto;
    background: ${ theme.tealSea1 };
    color: ${ theme.tealSea5 };

    @media(max-width: 700px){
        width: 90%;
    }
`;