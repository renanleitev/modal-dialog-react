import { createGlobalStyle } from "styled-components";
import * as colors from '../colors';

export default createGlobalStyle`
    body {
        font-family: sans-serif;
        color: ${colors.primaryDarkColor};
        background-color: ${colors.primaryWhiteColor};
    }
    html, body, #root {
        height: 100%;
    }
    button {
        cursor: pointer;
        background: ${colors.infoColor};
        border: none;
        color: #fff;
        padding: 10px 20px;
        border-radius: 4px;
        font-weight: 700;
        margin: 10px;
    }
    button:hover{
        background-color: ${colors.primaryColor};
    }
    a {
        text-decoration: none;
    }
    a:hover{
        color: ${colors.infoColor};
    }
    ul {
        list-style: none;
    }
`;