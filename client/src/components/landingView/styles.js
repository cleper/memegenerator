import styled from 'styled-components';

export const LandingViewContainer = styled.main `
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: rgb(58, 58, 58);
`;

export const LandingViewHeader = styled.header `
    color: rgb(250, 252, 253);
    font-family: var(--defaultFontFamily);
    font-size: 3rem;
    margin-bottom: 10vh;
`;

export const MemeSelectionContainer = styled.div `
    will-change: transform;
    position: absolute;
    width: 70%;
    height: 100%;
    top: 0;
    left: 0;
    transition: transform 3s ease-out;
    transform: translateZ(0);
    background-color: rgb(250, 250, 250);
    z-index: 2;
    transform: translateZ(0) translateX(${({show}) => show === true ? "0" : "-100%"});
    overflow: scroll;
`;


