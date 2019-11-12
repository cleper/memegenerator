import { createGlobalStyle } from 'styled-components';
import FjallOneRegular from '../../assets/fonts/FjallaOne-Regular.ttf';

const CssVariables = createGlobalStyle `

    @font-face {
        font-family: 'FjallOne-Regular';
        font-style: normal;
        src: url(${FjallOneRegular}) format('truetype');
    }

    :root{
        --cutSize: 80px;
        --defaultFontFamily: 'FjallOne-Regular', 'Arial', 'sans-serif';
    }

`;

export default CssVariables;