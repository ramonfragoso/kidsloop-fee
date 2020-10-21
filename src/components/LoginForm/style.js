import styled from 'styled-components';
// import {ReactComponent as SVGLogo} from '../../assets/logo.svg';
import { light } from '../../theme';

export const Container = styled.div`
    /* padding: 0px 30px; */
    width: 400px;
`;

export const Box = styled.div`
    border-radius: 12px;
    box-shadow: 0px 0px 20px 5px rgba(0,0,0,0.1);
    padding: 30px;
    background-color: ${({ theme }) => theme.box};
    transition: all 0.30s linear;
`;

export const Logo = styled.img`
    width: 80px;
    margin-bottom: 10px;
`;

export const Title = styled.div`
    color: ${({ theme }) => theme.text};
    font-weight: 400;
    font-size: 150%;
    padding: 30px 0px;
`;

export const LinkWrapper = styled.div`

    padding: 40px 0px 10px 0px;
`;

export const Link = styled.a`
    font-size: 90%;
    color: ${({theme}) => theme.link};  
    user-select: none;
    
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;