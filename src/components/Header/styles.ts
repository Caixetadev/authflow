import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    height: 6.5rem;
    width: 100%;
    border-bottom: 1px solid ${theme.colors.gray_border};
  `}
`;
