import styled, { css } from "styled-components";

export type ButtonProps = {
  withColor?: boolean;
};

export const Button = styled.button<ButtonProps>`
  ${({ theme, withColor }) => css`
    font-size: 1.4rem;
    font-weight: 600;
    border-radius: 0.8rem;
    background-color: ${withColor
      ? theme.colors.background_secondary
      : "transparent"};
    color: #fff;
    border: none;
    outline: none;
    width: 100%;
    height: 4.5rem;
    cursor: pointer;
  `}
`;
