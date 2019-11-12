import styled, { keyframes } from 'styled-components';

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
    width: 25%;
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
    margin-bottom: ${props => props.first ? "15px" : ""};

    &:hover{
        cursor: pointer;
    }
`;

export const DefaultInput = styled.input `
    font-family: var(--defaultFontFamily);
    margin: 15px 0;
    padding: 10px;
`;

export const ErrorMessage = styled.span `
    font-family: var(--defaultFontFamily);
    color: red;
    margin-top: 15px;
    visibility: ${props => props.error ? "initial" : "hidden"};
`;


