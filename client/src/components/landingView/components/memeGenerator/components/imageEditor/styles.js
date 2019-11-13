import styled from 'styled-components';
import imageBackground from '../../../../../../assets/images/memebackground.svg';
import device from '../../../../../../helpers/devices/index';

export const ImageEditorContainer = styled.div `
    display: flex;
    width: 100%;
    height: ${({width}) => width * 629 / 960}px;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-radius: 10px;
    background-image: url(${imageBackground});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin-bottom: 15px;

    @media${device.tablet}{
        width: 70%;
        height: ${({width}) => width * 0.7 * 629 / 960}px;
    }

    @media${device.laptopL}{
        width: 50%;
        height: ${({width}) => width * 0.5 * 629 / 960}px;
        margin: 0;
    }

    @media${device.desktopL}{
        width: 40%;
        height: ${({width}) => width * 0.4 * 629 / 960}px;
    }
`;

export const SelectedImage = styled.img `
    max-width: 80%;
    max-height: 70%;

`

export const Cut = styled.div `
    position: absolute;
    height: calc(var(--cutSize) / 2);
    width: var(--cutSize);
    border-top-left-radius: var(--cutSize);
    border-top-right-radius: var(--cutSize);
    background-color: #3A3A3A;
    left: -34px;
    transform: rotate(135deg);
`;