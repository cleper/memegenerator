import styled, { keyframes } from 'styled-components';
import device from '../../../../../../helpers/devices/index';

const bouncing = keyframes `
    5%{
        transform: rotate(-5deg);
    }
    10%{
        transform: rotate(5deg);
    }
    15%{
        transform: rotate(-5deg);
    }
    20%{
        transform: rotate(4deg);
    }
    25%{
        tranform: rotate(-3deg)
    }
    30%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(0deg);
    }
`;

export const MeniuContainer = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media${device.tablet}{
        width: 30%;
    }

    @media${device.laptopL}{
        width: 25%;
    }

    @media${device.desktopL}{
        width: 30%;
    }
`;

export const DefaultButton = styled.button `
    font-family: var(--defaultFontFamily);
    font-size: 1.5rem;
    color: rgb(250, 252, 253);
    padding: 10px 20px;
    border-radius: 10px;
    border:none;
    background-color: #DC3D24;
    animation: ${props => props.animate && bouncing} 6s linear infinite;
    margin-bottom: 15px;

    @media${device.desktopL}{
        font-size: 3rem;
        padding: 20px 40px;
        margin-bottom: 30px;
    }

    &:hover{
        cursor: pointer;
    }
`;

export const DefaultInput = styled.input `
    font-family: var(--defaultFontFamily);
    margin: 15px 0;
    padding: 10px;

    @media${device.laptopL}{
        font-size: 1.5rem;
    }

    @media${device.desktopL}{
        margin: 30px 0;
        padding: 20px;
        font-size: 3rem;
    }
`;

export const ErrorMessage = styled.span `
    font-family: var(--defaultFontFamily);
    color: red;
    margin-bottom: 15px;
    visibility: ${props => props.error ? "initial" : "hidden"};

    @media${device.desktopL}{
        margin-bottom: 30px;
        font-size: 2rem;
    }
`;


