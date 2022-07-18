import styled from 'styled-components';
import { theme } from '../../theme';

export const Head = styled.header`
    width: 100%;
    height: 70px;
    margin: 70px 0;
    display: flex;
    div{
        margin-right: 10px;
        nav{
            display: flex;
            gap: 10px;
            a{
                padding: 0 10px 0 0;
                color: ${ theme.tealSea5 };
                text-decoration: none;
                &:nth-child(1), &:nth-child(2){
                    border-right: solid 1px ${ theme.tealSea5 };
                }
                &:hover{
                    color: ${ theme.tealSea4 };
                    text-decoration:underline;
                }
            }
        }
    }
    &:hover{
        p{
            right: ${(props)=>props.x ? props.x : '10px'};   
        }
    }
`