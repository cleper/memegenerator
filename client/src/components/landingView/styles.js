import styled from 'styled-components';
import device from '../../helpers/devices/index';

export const LandingViewContainer = styled.main `
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgb(58, 58, 58);
    min-height: 100vh;
    min-width: 100vw;
    padding: 30px 0;
    box-sizing: border-box;

    @media${device.standard}{
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }
`;

export const LandingViewHeader = styled.header `
    color: rgb(250, 252, 253);
    font-family: var(--defaultFontFamily);
    margin-bottom: 10vh;
    font-size: 1.3rem;
    text-align: justify;
    padding: 0 5px;

    @media${device.tablet}{
        font-size: 2rem;
    }

    @media${device.standard}{
        font-size: 3rem;
    }

    @media${device.desktopL}{
        font-size: 10rem;
    }
`;

export const MemeSelectionContainer = styled.div `
    will-change: transform;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: transform 3s ease-out;
    transform: translateZ(0);
    background-color: rgb(250, 250, 250);
    z-index: 2;
    transform: translateZ(0) translateX(${({show}) => show === true ? "0" : "-100%"});
    overflow: scroll;

    @media${device.tablet}{
        width: 70%;
    }
`;


