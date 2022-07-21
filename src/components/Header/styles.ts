import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    position: sticky;
    top: 0;
    left: 0;
    height: 6.5rem;
    width: 100%;
    border-bottom: 1px solid ${theme.colors.gray_border};
    margin-bottom: 17.5rem;
  `}
`;
