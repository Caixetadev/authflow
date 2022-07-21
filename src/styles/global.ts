import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-size: 1.6rem;
      color: #fff;
      font-family: "Poppins", sans-serif;
      background-color: ${theme.colors.background};
    }
  `}
`;
