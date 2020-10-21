import styled from 'styled-components';
import { light } from '../../../theme';

export const Container = styled.form`
    display: flex;
    flex-direction: column;

`;

export const Input = styled.input`
    border-radius: 12px;
    border: ${({theme}) => "1.5px " +  theme.border + " solid"};
    padding: 15px;
    margin: 3px 0px;
    font-family: "Circular Std Book", Sans-serif;
    background-color: ${({theme}) => theme.input}; 
    color: ${({theme}) => theme.text}; 
    transition: all 0.30s linear;
    font-size: 100%;

    :focus {
        outline: none !important;
        border: 1.5px solid ${light.colors.blue};
        box-shadow: 0 0 10px #719ECE;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
`;

export const ForgotPassword = styled.a`
    font-size: 90%;
    color: ${({theme}) => theme.link}; 
    user-select: none;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

export const Button = styled.button`
    border-radius: 12px;
    background-color: ${light.colors.blue};
    border: none;
    color: white;
    padding: 8px;
    width: 90px;
    font-family: "Circular Std Book", Sans-serif;
    :focus {
        outline: none !important;
        border: 1.5px solid ${light.colors.blue};
        box-shadow: 0 0 10px #719ECE;
    }
`;