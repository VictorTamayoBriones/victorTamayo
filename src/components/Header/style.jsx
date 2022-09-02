import styled from 'styled-components';
import { theme } from '../../theme';

export const Head = styled.header`
    width: 100%;
    height: 70px;
    margin: 70px 0;
    display: flex;
    a{
        text-decoration: none;
    }
    h1{
        color: ${ theme.tealSea5 };
    }
    div{
        margin-right: 10px;
        nav{
            display: flex;
            gap: 10px;
            a{
                padding: 0 10px 0 0;
                color: ${ theme.tealSea5 };
                text-decoration: none;
                &:nth-child(1){
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

    @media(max-width: 377px){
        h1{
           font-size : 25px;
           padding: 10px 20px;
        }
        nav{
            padding: 10px 20px;
        }
    }
`