import React from "react";

import styled from "styled-components";

const ButtonStyles = styled.button`
  background-color: #999;
  color: #fff;
  font-size: 1rem;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: royalblue;
  }
`;
export interface ButtonProps {
  children?: React.ReactNode;
}
export const Button = ({ children }: ButtonProps) => (
  <ButtonStyles>{children}</ButtonStyles>
);
