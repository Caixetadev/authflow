import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: max-content;
    margin: 0 auto;
  `}
`;

export const ForgotPassword = styled.span`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 1.2rem;
    color: ${theme.colors.gray};
    font-size: 1.3rem;
    font-weight: 600;
    cursor: pointer;
  `}
`;
