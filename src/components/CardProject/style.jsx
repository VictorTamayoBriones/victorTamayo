import styled from 'styled-components';
import { theme } from '../../theme';

export const Card = styled.article`
    width: 48%;
    overflow: hidden;
    margin-bottom: 40px;
    img{
        width: 100%;
    }
    button{
        background: transparent;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media(max-width: 700px){
        width: 100%;
    }
`;

export const CardBody = styled.section`
    h3{
        margin-bottom: 10px;
    }
    width: 100%;
    margin: 20px 0;
`;

export const CardButtons = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
`;