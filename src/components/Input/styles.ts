import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 5.8rem;
  margin-top: 4.2rem;
`;

export const Image = styled.img`
  position: absolute;
  bottom: 20px;
  right: 10px;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    position: absolute;
    bottom: 20px;
    left: 0;
    pointer-events: none;
    transition: 0.3s;
    padding-left: 0.8rem;
    font-size: 1.2rem;
    color: ${theme.colors.gray};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 49.6rem;
    height: 5.8rem;
    padding: 2.4rem 5.6rem 0.8rem 2rem;
    border-radius: 0.8rem 0.8rem 0 0;
    border: none;
    outline: none;
    color: #fff;
    padding-left: 0.8rem;
    background-color: ${theme.colors.background_secondary};
    border-bottom: 3px solid ${theme.colors.gray_border};

    &:focus ~ ${Label} {
      transform: translateY(-17px);
    }

    &:valid ~ ${Label} {
      transform: translateY(-17px);
    }
  `}
`;
