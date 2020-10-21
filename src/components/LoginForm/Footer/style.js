import styled from 'styled-components';
import { ReactComponent as SunSVG} from '../../../assets/sun.svg';

export const Container = styled.div`
    padding: 10px 0px 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Config = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Sun = styled(SunSVG)`
    width: 17px;
    height: 17px;
    margin-right: 10px;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const Link = styled.div`
    font-size: 80%;
    margin: 0px 5px;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Select = styled.select`
    top: 5px;
    border: none;
    background-color: white;
    text-decoration: underline;
    font-family: "Circular Std Book", Sans-serif;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;