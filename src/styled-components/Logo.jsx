import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../theme';

export const Logo = () =>{
    return(
        <Container>
            <Letter color={ theme.tealSea5 } x='19px' >V</Letter>
            <Letter color={ theme.tealSea4 } x='16px' >V</Letter>
            <Letter color={ theme.tealSea3 } x='13px' >V</Letter>
            <Link to="/">
                <Letter color={ theme.tealSea2 } x='8px' >V</Letter>
            </Link>
        </Container>
    )
}

const Letter = styled.p`
    color: ${ (props) => props.color ? props.color : '#ccc'};
    font-size: 80px;
    font-weight: 800;
    position: absolute;
    top: -18px;
    right: ${(props)=>props.x ? props.x : ''};   
    transition: .3s ease-in all;
`

const Container = styled.div`
    width: 70px;
    height: 70px;
    position: relative;
`