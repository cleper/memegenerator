import styled from 'styled-components';
import imageBackground from '../../../../../../assets/memebackground.svg'

export const ImageEditorContainer = styled.div `
    display: flex;
    width: 50%;
    height: 629px;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-radius: 10px;
    background-image: url(${imageBackground});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
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