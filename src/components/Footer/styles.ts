import styled, { css } from "styled-components";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 4rem;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 110rem;
  width: 90%;
`;

export const AllRights = styled.p`
  ${({ theme }) => css`
    font-weight: 600;
    font-size: 1.2rem;
    color: ${theme.colors.gray};
  `}
`;
