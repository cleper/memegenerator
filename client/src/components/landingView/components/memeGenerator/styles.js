import styled from 'styled-components';
import device from '../../../../helpers/devices/index';

export const MemeGeneratorContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;

    @media${device.tablet}{
        flex-direction: row;
        justify-content: flex-end;
    }

`;