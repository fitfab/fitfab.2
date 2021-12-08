import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    brand: "#ff4158", // hot pink used on the logo
    brand25: "rgba(255, 65, 88, 0.25)",
    accent: "#adbbc5", // light blue used on the logo and on the background
    dark: "#1B2730", // black used on the text
    gray: "#3C4853", // dark gray used on other text
    gray75: "#5F6C77", // other grays used on borders and other elements
    gray50: "#85939E",
    gray25: "#B8C8D5",
    white: "#ffffff",
    success: "#007847", // green used on messages
    error: "#FF1102", // red used on messages
    warning: "#F0742D", // orange used on messages
    info: "#083D77", // blue used on messages
  },
};

export type ThemeProps = {
  theme: typeof theme;
};

export const GlobalStyle = createGlobalStyle<ThemeProps>`
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    body, html {
        box-sizing: border-box;
        position: relative;
        font-family: 'Barlow', sans-serif;
        font-size: 16px;
        letter-spacing: 1px;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    button {
        background-color: transparent;
    }
    img {
        border: none;
    }
    a {

        text-decoration: none;
        font-family: inherit;
    }
    ul {
        margin: 0;
        padding: 0;
    }
`;
