import styled from 'styled-components';
import device from '../../../../helpers/devices/index';

export const MemeList = styled.div `
    display: ${props => props.display ? "flex": "none"};
    flex-wrap: wrap;
`

export const Meme = styled.img `
    max-width: 80%;
    max-height: 30vh;
    padding: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);

    &:hover{
        cursor: pointer;
    }

    @media${device.tablet}{
        max-width: 30%;
        max-height: 30vh;
    }
`;