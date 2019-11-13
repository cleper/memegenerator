import { createGlobalStyle } from 'styled-components';
import fjalloneregular from '../../assets/fonts/fjalloneregular.ttf';

const CssVariables = createGlobalStyle `

    @font-face {
        font-family: 'FjallOne-Regular';
        font-style: normal;
        src: font-url(${fjalloneregular}) format('truetype');
    }

    :root{
        --cutSize: 80px;
        --defaultFontFamily: 'FjallOne-Regular', 'Arial', 'sans-serif';
    }

`;

export default CssVariables;