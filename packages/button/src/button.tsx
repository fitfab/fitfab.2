import React from "react";

import styled from "styled-components";

const ButtonStyles = styled.button`
  background-color: #c2005a;
  color: #fff;
  font-size: 1rem;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in;
  outline: 0px solid rgba(0, 0, 0, 0);
  &:hover {
    background-color: #000;
    outline-offset: 4px;
    outline: 1px solid rgba(0, 0, 0, 0.3);
  }
`;
export interface ButtonProps {
  children?: React.ReactNode;
}
export const Button = ({ children }: ButtonProps) => (
  <ButtonStyles>{children}</ButtonStyles>
);
