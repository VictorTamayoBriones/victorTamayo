import styled from 'styled-components';
import {theme} from '../theme';

export const Section = styled.section`
    width: 100%;
    margin-bottom: 70px;
`;

export const SectionTitle = styled.h2`
    font-weight: 500;
    font-size: 35px;
    margin-bottom: ${(props)=>props.mb ? props.mb : '50px'};
`

export const SectionText = styled.p`
    letter-spacing: 1px;
    line-height: 23px;

    .cv{
        display: block;
        color:${ theme.tealSea4 };
        width: 100%;
    }
`;

export const SectionList = styled.ul`
    width: 100%;
    list-style: none;
`

export const SectionListItem = styled.li`
    width: 100%;
    margin-bottom: 8px;
    letter-spacing: 1px;
`;