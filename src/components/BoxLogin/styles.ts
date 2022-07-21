import styled, { css } from "styled-components";

export const Box = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    border-radius: 0.8rem;
    background-color: ${theme.colors.background_secondary};
    cursor: pointer;

    & + div {
      margin-left: 3.6rem;
    }
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2.4rem;
  margin-bottom: 4.3rem;
`;
