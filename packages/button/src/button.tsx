import React from "react";

import styled from "styled-components";
export interface ButtonProps {
  /**
   *  A string | React node to be rendered as the button's content
   */
  children?: React.ReactNode;
  /**
   * Determines the action of the button
   */
  variant?: "primary" | "secondary";
}
const ButtonStyles = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.variant === "primary" ? "#212121" : "#505050"};
  color: #fff;
  font-size: 1rem;
  padding: 9px 24px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: #ff4158;
    outline-offset: 1px;
    outline: 4px solid rgba(258, 65, 106, 0.3);
  }
`;

export const Button = ({ children, ...rest }: ButtonProps) => (
  <ButtonStyles {...rest}>{children}</ButtonStyles>
);
