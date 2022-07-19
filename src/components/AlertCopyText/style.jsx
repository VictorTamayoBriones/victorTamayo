import styled from 'styled-components';
import { theme } from '../../theme';

export const Alert = styled.div`
    width: 110%;
    text-align: center;
    background: #000000c0;
    border-radius: 0 3px;
    position: absolute;
    padding: 5px;
    top: -10%;
    left: 110%;
    box-shadow: 0px 0px 9px 2px ${ theme.tealSea2 };
    opacity: ${ (props)=>props.active === true ? 1 : 0 };
    transition: 1s cubic-bezier(0.4, 0, 0.2, 1) all;
`;