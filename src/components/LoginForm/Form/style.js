import styled from 'styled-components';
import theme from '../../../theme';

export const Container = styled.form`
    display: flex;
    flex-direction: column;

`;

export const Input = styled.input`
    border-radius: 12px;
    border: 1.5px #d1d1d1 solid;
    padding: 15px;
    margin: 3px 0px;
    font-family: "Circular Std Book", Sans-serif;
    font-size: 100%;

    :focus {
        outline: none !important;
        border: 1.5px solid ${theme.colors.blue};
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
    color: ${theme.colors.navyBlue};    
    user-select: none;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

export const Button = styled.button`
    border-radius: 12px;
    background-color: ${theme.colors.blue};
    border: none;
    color: white;
    padding: 8px;
    width: 90px;
    font-family: "Circular Std Book", Sans-serif;
    :focus {
        outline: none !important;
        border: 1.5px solid ${theme.colors.blue};
        box-shadow: 0 0 10px #719ECE;
    }
`;